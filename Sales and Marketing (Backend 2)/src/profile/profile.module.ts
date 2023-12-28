import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/entities/users.entity';
import { MailService } from 'src/mailer/mail.service';
import { MailModule } from 'src/mailer/mail.module';

@Module({
  imports : [TypeOrmModule.forFeature([Users]),MailModule],
  controllers: [ProfileController],
  providers: [ProfileService,MailService],
})
export class ProfileModule {}
