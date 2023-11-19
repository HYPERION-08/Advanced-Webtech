import { Users } from 'src/entities/users.entity';
import { Repository } from 'typeorm';
import { Generate2FADto, ProfileDto } from './dto/profile.dto';
import { MailService } from 'src/mailer/mail.service';
export declare class ProfileService {
    private readonly usersRepo;
    private readonly mailService;
    private readonly transporter;
    constructor(usersRepo: Repository<Users>, mailService: MailService);
    getAllProfile(): Promise<Users[]>;
    getProfile(id: number): Promise<Users>;
    updateProfile(id: number, data: ProfileDto): Promise<import("typeorm").UpdateResult>;
    deleteProfile(id: number): Promise<import("typeorm").DeleteResult>;
    generateAndSend2FACode(id: number, dto: Generate2FADto): Promise<{
        message: string;
    }>;
    verify2FACode(id: number, code: string): Promise<string>;
    sendMarketingMail(marketingContent: string): Promise<string>;
    sendMail(to: string, subject: string, text: string): Promise<any>;
}
