import { Controller, Get, Post , Body } from '@nestjs/common';
import { MailService } from "./mail.service";
import { AuthService } from 'src/auth/auth.service';

@Controller('')
export class MailController {
  constructor(private readonly mailService: MailService,
              // private readonly authService : AuthService,
              ) {}


  @Post('send-email')
  async sendEmail(@Body() emailData: { to: string; subject: string; text: string }) {
    const { to, subject, text } = emailData;
    await this.mailService.sendMail(to, subject, text);
    return 'Email sent!';
  }

// @Post('send-emails')
//   async sendMarketingEmails(@Body() marketingContent: string): Promise<string> {
//     const users = await this.authService.getAllProfile();
//     await this.mailService.sendMarketingMail(users, marketingContent);
//     return 'Marketing email sent to users!';
//   }

}
