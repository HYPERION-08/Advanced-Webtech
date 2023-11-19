"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const users_entity_1 = require("../entities/users.entity");
const typeorm_2 = require("typeorm");
const mail_service_1 = require("../mailer/mail.service");
let ProfileService = class ProfileService {
    constructor(usersRepo, mailService) {
        this.usersRepo = usersRepo;
        this.mailService = mailService;
    }
    async getAllProfile() {
        return await this.usersRepo.find();
    }
    async getProfile(id) {
        const user = await this.usersRepo.findOne({ where: { id: id } });
        if (user)
            return user;
        throw new common_1.NotFoundException('No Profiles found with this id ' + id);
    }
    async updateProfile(id, data) {
        return await this.usersRepo.update(id, data);
    }
    async deleteProfile(id) {
        return await this.usersRepo.delete(id);
    }
    async generateAndSend2FACode(id, dto) {
        const { email } = dto;
        const user = await this.usersRepo.findOne({ where: { id } });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        const twoFactorCode = Math.floor(100000 + Math.random() * 900000);
        user.twoFactorCode = twoFactorCode.toString();
        await this.usersRepo.save(user);
        const emailSubject = 'Two-Factor Authentication Code';
        const emailText = `Your two-factor authentication code is: ${twoFactorCode}`;
        await this.mailService.sendMail(email, emailSubject, emailText);
        return { message: 'Two-factor authentication code has been sent' };
    }
    async verify2FACode(id, code) {
        const user = await this.usersRepo.findOne({ where: { id } });
        if (!user || !user.twoFactorCode || user.twoFactorCode !== code) {
            throw new common_1.UnauthorizedException('Invalid two-factor authentication code');
        }
        user.twoFactorCode = null;
        await this.usersRepo.save(user);
        return 'User Authenticated!';
    }
    async sendMarketingMail(marketingContent) {
        const users = await this.usersRepo.find();
        const marketingEmails = users.map((user) => user.email).filter(email => email);
        if (marketingEmails.length === 0) {
            return 'No valid email addresses found!';
        }
        for (const email of marketingEmails) {
            try {
                const emailSubject = 'Special Marketing Offer';
                await this.mailService.sendMail(email, emailSubject, marketingContent);
            }
            catch (error) {
                console.error(`Failed to send email to ${email}: ${error}`);
            }
        }
        return 'Marketing email sent to users!';
    }
    async sendMail(to, subject, text) {
        if (!to) {
            throw new Error('No recipient specified');
        }
        const mailOptions = {
            from: 'ovyprojects@gmail.com',
            to,
            subject,
            text,
        };
        try {
            return await this.transporter.sendMail(mailOptions);
        }
        catch (error) {
            console.error(`Failed to send email: ${error}`);
        }
    }
};
exports.ProfileService = ProfileService;
exports.ProfileService = ProfileService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(users_entity_1.Users)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        mail_service_1.MailService])
], ProfileService);
//# sourceMappingURL=profile.service.js.map