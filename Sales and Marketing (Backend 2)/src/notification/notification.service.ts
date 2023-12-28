import { BadRequestException, ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Notification } from 'src/entities/notification.entity';
import { Repository } from 'typeorm';
import { NotificationDto } from './dto/notification.dto';

@Injectable()
export class NotificationService {
  constructor(
    @InjectRepository(Notification)
    private notificationRepository : Repository<Notification>,
  ){}

  async getAllNotifications(): Promise<Notification[]>{
    return this.notificationRepository.find()
  }


  // without dto---------------
  //----------------------------------
  // async createNotificaiton(content : string): Promise<Notification>{
  //   const notification = this.notificationRepository.create({content});
  // return this.notificationRepository.save(notification);
  // }


  // async markAsRead(notificationId: number): Promise<string> {
  //   const notification = await this.notificationRepository.findOne({ where: { id: notificationId } });
  //   if (!notification) {
  //     throw new NotFoundException(`Notification with ID ${notificationId} not found`);
  //   }
  //   if (notification.read) {
  //     throw new ConflictException('Notification is already marked as read');
  //   }
  //   notification.read = true;
  //   await this.notificationRepository.save(notification);
  
  //   return 'Marked as Read';
  // }

  // dto ------------------
  //---------------------

  async createNotification(dto: NotificationDto): Promise<Notification> {
    const notification = this.notificationRepository.create(dto);
    return this.notificationRepository.save(notification);
  }

  async markAsRead(notificationId: number): Promise<string> {
    const notification = await this.notificationRepository.findOne({ where: { id: notificationId } });
    if (!notification) {
      throw new NotFoundException(`Notification with ID ${notificationId} not found`);
    }
    if (notification.read) {
      throw new ConflictException('Notification is already marked as read');
    }
    notification.read = true;
    await this.notificationRepository.save(notification);

    return 'Marked as Read';
  }
}
