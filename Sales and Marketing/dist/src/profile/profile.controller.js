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
exports.ProfileController = void 0;
const common_1 = require("@nestjs/common");
const profile_service_1 = require("./profile.service");
const profile_dto_1 = require("./dto/profile.dto");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
let ProfileController = class ProfileController {
    constructor(profileService) {
        this.profileService = profileService;
    }
    async uploadFile() {
        return "File Uploaded";
    }
    getFile(res, fileName) {
        if (!fileName) {
            res.status(common_1.HttpStatus.BAD_REQUEST).send('File name is required');
            return;
        }
        res.sendFile(fileName, { root: './uploads' });
    }
    getProfile(id) {
        return this.profileService.getProfile(id);
    }
    update(id, data) {
        this.profileService.updateProfile(id, data);
        return "profile has been updated";
    }
    delete(id) {
        return this.profileService.deleteProfile(id);
    }
    async generate2FACode(id, dto) {
        const result = await this.profileService.generateAndSend2FACode(id, dto);
        return result;
    }
    async verify2FACode(id, code) {
        try {
            const message = await this.profileService.verify2FACode(id, code);
            return { message };
        }
        catch (error) {
            if (error instanceof common_1.UnauthorizedException) {
                throw new common_1.HttpException({ message: 'Invalid two-factor authentication code' }, common_1.HttpStatus.UNAUTHORIZED);
            }
            throw new common_1.HttpException({ message: 'An unexpected error occurred' }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async sendMarketingMail(marketingContent) {
        return this.profileService.sendMarketingMail(marketingContent);
    }
};
exports.ProfileController = ProfileController;
__decorate([
    (0, common_1.Post)('upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.diskStorage)({
            destination: "./uploads",
            filename: (req, file, cb) => {
                cb(null, `${file.originalname}`);
            }
        })
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProfileController.prototype, "uploadFile", null);
__decorate([
    (0, common_1.Get)('getFile'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)('fileName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], ProfileController.prototype, "getFile", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ProfileController.prototype, "getProfile", null);
__decorate([
    (0, common_1.Put)('update/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, profile_dto_1.ProfileDto]),
    __metadata("design:returntype", void 0)
], ProfileController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ProfileController.prototype, "delete", null);
__decorate([
    (0, common_1.Post)(':id/generate'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, profile_dto_1.Generate2FADto]),
    __metadata("design:returntype", Promise)
], ProfileController.prototype, "generate2FACode", null);
__decorate([
    (0, common_1.Post)(':id/verify'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], ProfileController.prototype, "verify2FACode", null);
__decorate([
    (0, common_1.Post)('campaign'),
    __param(0, (0, common_1.Body)('marketingContent')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProfileController.prototype, "sendMarketingMail", null);
exports.ProfileController = ProfileController = __decorate([
    (0, common_1.Controller)('profile'),
    __metadata("design:paramtypes", [profile_service_1.ProfileService])
], ProfileController);
//# sourceMappingURL=profile.controller.js.map