import { MailService } from "./mail.service";
export declare class MailController {
    private readonly mailService;
    constructor(mailService: MailService);
    sendEmail(emailData: {
        to: string;
        subject: string;
        text: string;
    }): Promise<string>;
}
