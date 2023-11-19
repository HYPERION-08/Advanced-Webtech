export declare class MailService {
    private readonly transporter;
    constructor();
    sendMail(to: string, subject: string, text: string): Promise<any>;
}
