import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileModule } from './profile/profile.module';
import { NotificationModule } from './notification/notification.module';
import { AnalyticsModule } from './analytics/analytics.module';
import ormConfig from 'ormconfig';
import { MailModule } from './mailer/mail.module';
import { MailController } from './mailer/mail.controller';
import { MailService } from './mailer/mail.service';
import { AuthService } from './auth/auth.service';
import { ProfileService } from './profile/profile.service';
import { ProfileController } from './profile/profile.controller';
import { Users } from './entities/users.entity';

@Module({
  imports: [AuthModule,TypeOrmModule.forRoot(ormConfig), ProfileModule, NotificationModule, AnalyticsModule,MailModule],
  controllers: [AppController,MailController],
  providers: [AppService,MailService],
})
export class AppModule {}
