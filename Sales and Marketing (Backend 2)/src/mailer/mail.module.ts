import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { ProfileService } from 'src/profile/profile.service';

@Module({
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
