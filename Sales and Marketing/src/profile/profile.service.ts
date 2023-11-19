import { Injectable, NotFoundException, Param, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/entities/users.entity';
import { Repository } from 'typeorm';
import { Generate2FADto, ProfileDto } from './dto/profile.dto';
import { MailService } from 'src/mailer/mail.service';

@Injectable()
export class ProfileService {
  private readonly transporter;
  constructor(
    @InjectRepository(Users)
    private readonly usersRepo:Repository<Users>,
    private readonly mailService: MailService,
  ){}

  async getAllProfile(){
    return await this.usersRepo.find();
  }

  async getProfile(id:number){
    const user = await this.usersRepo.findOne({where: {id :id}});
    if (user) return user;
    throw new NotFoundException('No Profiles found with this id '+ id);
  }
  async updateProfile(id : number, data : ProfileDto){
    return await this.usersRepo.update(id,data);
  }

  async deleteProfile(id:number){
    return await this.usersRepo.delete(id);
  }

  async generateAndSend2FACode(id: number, dto: Generate2FADto): Promise<{ message: string }> {
    const { email } = dto;
    const user = await this.usersRepo.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException('User not found');
    }
  
    // Generate a random 6-digit code
    const twoFactorCode = Math.floor(100000 + Math.random() * 900000);
  
    // Save the code to the user's profile (you might want to encrypt it)
    user.twoFactorCode = twoFactorCode.toString();
    await this.usersRepo.save(user);
  
    // Send the code via email
    const emailSubject = 'Two-Factor Authentication Code';
    const emailText = `Your two-factor authentication code is: ${twoFactorCode}`;
    await this.mailService.sendMail(email, emailSubject, emailText);
  
    return { message: 'Two-factor authentication code has been sent' };
  }
  


  async verify2FACode(id: number, code: string): Promise<string> {
    const user = await this.usersRepo.findOne({ where: { id } });
    if (!user || !user.twoFactorCode || user.twoFactorCode !== code) {
      throw new UnauthorizedException('Invalid two-factor authentication code');
    }

    // Code is valid, perform any additional actions if needed

    // Clear the two-factor code after successful verification
    user.twoFactorCode = null;
    await this.usersRepo.save(user);

    return 'User Authenticated!';
  }




  async sendMarketingMail(marketingContent: string): Promise<string> {
    const users = await this.usersRepo.find();
  
    // Extract the emails of all users and filter out invalid email addresses
    const marketingEmails = users.map((user) => user.email).filter(email => email);
  
    // If there are no valid email addresses, return a message
    if (marketingEmails.length === 0) {
      return 'No valid email addresses found!';
    }
  
    // Send the marketing email to each user
    for (const email of marketingEmails) {
      try {
        const emailSubject = 'Special Marketing Offer';
        await this.mailService.sendMail(email, emailSubject, marketingContent);
      } catch (error) {
        console.error(`Failed to send email to ${email}: ${error}`);
      }
    }
  
    return 'Marketing email sent to users!';
  }
  
  async sendMail(to: string, subject: string, text: string) {
    if (!to) {
      throw new Error('No recipient specified');
    }
  
    const mailOptions = {
      from: 'ovyprojects@gmail.com',
      to,
      subject,
      text,
    };
  
    try {
      return await this.transporter.sendMail(mailOptions);
    } catch (error) {
      console.error(`Failed to send email: ${error}`);
    }
  }
  
  

}
