import { Notification } from 'src/entities/notification.entity';
import { Repository } from 'typeorm';
import { NotificationDto } from './dto/notification.dto';
export declare class NotificationService {
    private notificationRepository;
    constructor(notificationRepository: Repository<Notification>);
    getAllNotifications(): Promise<Notification[]>;
    createNotification(dto: NotificationDto): Promise<Notification>;
    markAsRead(notificationId: number): Promise<string>;
}
