import { NotificationService } from './notification.service';
import { NotificationDto } from './dto/notification.dto';
export declare class NotificationController {
    private readonly notificationService;
    constructor(notificationService: NotificationService);
    getAllNotifications(): Promise<import("../entities/notification.entity").Notification[]>;
    createNotification(dto: NotificationDto): Promise<import("../entities/notification.entity").Notification>;
    readNotification(id: string): Promise<string>;
}
