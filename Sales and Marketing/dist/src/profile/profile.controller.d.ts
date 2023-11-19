import { ProfileService } from './profile.service';
import { Generate2FADto, ProfileDto } from './dto/profile.dto';
import { Response } from 'express';
export declare class ProfileController {
    private readonly profileService;
    constructor(profileService: ProfileService);
    uploadFile(): Promise<string>;
    getFile(res: Response, fileName: string): void;
    getProfile(id: number): Promise<import("../entities/users.entity").Users>;
    update(id: number, data: ProfileDto): string;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
    generate2FACode(id: number, dto: Generate2FADto): Promise<{
        message: string;
    }>;
    verify2FACode(id: number, code: string): Promise<{
        message: string;
    }>;
    sendMarketingMail(marketingContent: string): Promise<string>;
}
