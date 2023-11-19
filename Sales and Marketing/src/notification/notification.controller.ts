import { BadRequestException, Body, Controller , Get, Param, Post, ValidationPipe } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { MailService } from 'src/mailer/mail.service';
import { ApiProperty } from '@nestjs/swagger';
import { NotificationDto } from './dto/notification.dto';

@Controller('notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Get()
  getAllNotifications(){
    return this.notificationService.getAllNotifications();
  }

  // @Post()
  // createNotification(@Body('content')content : string){
  //   return this.notificationService.createNotificaiton(content);
  // }

@Post()
createNotification(@Body(new ValidationPipe()) dto: NotificationDto) {
    return this.notificationService.createNotification(dto);
}


@Get(':id/read')
readNotification(@Param('id') id: string): Promise<string> {
  const notificationId = parseInt(id, 10);

  if (isNaN(notificationId)) {
    throw new BadRequestException('Invalid notification ID');
  }
  return this.notificationService.markAsRead(notificationId);

}

}
