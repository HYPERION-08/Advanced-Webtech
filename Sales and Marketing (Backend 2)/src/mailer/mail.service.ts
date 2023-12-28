import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as nodemailer from 'nodemailer';
import { Users } from 'src/entities/users.entity';
import { Repository } from 'typeorm';



@Injectable()
export class MailService {
  private readonly transporter;
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      ignoreTLS: true,
      secure: true,
      auth: {
        user: 'ovyprojects@gmail.com',
        pass: 'fmkyoruyxdoukprr',
      },
      tls: {
        rejectUnauthorized: false // add this line
      },
    });
  }

  async sendMail(to: string, subject: string, text: string) {
    const mailOptions = {
      from: 'ovyprojects@gmail.com',
      to,
      subject,
      text,
    };

    return await this.transporter.sendMail(mailOptions);
  }



  // async sendMarketingMail(users: Users[], marketingContent: string): Promise<void> {
  //   const marketingEmails = users.map((user) => user.email);

  //   await Promise.all(
  //     marketingEmails.map(async (email) => {
  //       const emailSubject = 'Special Marketing Offer';
  //       await this.sendMail(email, emailSubject, marketingContent);
  //     }),
  //   );

  //   }


  // async sendMarketingMail(users: Users[], marketingContent: string): Promise<string> {
  //   const marketingEmails = users.map((user) => user.email);
  
  //   await Promise.all(
  //     marketingEmails.map(async (email) => {
  //       const emailSubject = 'Special Marketing Offer';
  //       await this.sendMail(email, emailSubject, marketingContent);
  //     }),
  //   );
  
  //   return 'Marketing email sent to users!';
  // }

}
