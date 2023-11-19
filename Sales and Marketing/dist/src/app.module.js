"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./auth/auth.module");
const typeorm_1 = require("@nestjs/typeorm");
const profile_module_1 = require("./profile/profile.module");
const notification_module_1 = require("./notification/notification.module");
const analytics_module_1 = require("./analytics/analytics.module");
const ormconfig_1 = require("../ormconfig");
const mail_module_1 = require("./mailer/mail.module");
const mail_controller_1 = require("./mailer/mail.controller");
const mail_service_1 = require("./mailer/mail.service");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [auth_module_1.AuthModule, typeorm_1.TypeOrmModule.forRoot(ormconfig_1.default), profile_module_1.ProfileModule, notification_module_1.NotificationModule, analytics_module_1.AnalyticsModule, mail_module_1.MailModule],
        controllers: [app_controller_1.AppController, mail_controller_1.MailController],
        providers: [app_service_1.AppService, mail_service_1.MailService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map