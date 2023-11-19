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
exports.AnalyticsController = void 0;
const common_1 = require("@nestjs/common");
const analytics_service_1 = require("./analytics.service");
const analytics_dto_1 = require("./dto/analytics.dto");
let AnalyticsController = class AnalyticsController {
    constructor(analyticsService) {
        this.analyticsService = analyticsService;
    }
    getAnalytics() {
        return this.analyticsService.getAnalytics();
    }
    logEndpoint(data) {
        return this.analyticsService.incrementEndpointCount(data);
    }
    async getSalesAnalytics() {
        const salesData = await this.analyticsService.getSalesAnalytics();
        return { salesData };
    }
    async createSalesAnalytics(data) {
        return this.analyticsService.createSalesAnalytics(data);
    }
    async getMarketingAnalytics() {
        const marketingData = await this.analyticsService.getMarketingAnalytics();
        return { marketingData };
    }
    async createMarketingAnalytics(data) {
        return this.analyticsService.createMarketingAnalytics(data);
    }
};
exports.AnalyticsController = AnalyticsController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AnalyticsController.prototype, "getAnalytics", null);
__decorate([
    (0, common_1.Post)('log'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [analytics_dto_1.IncrementEndpointCountDto]),
    __metadata("design:returntype", Promise)
], AnalyticsController.prototype, "logEndpoint", null);
__decorate([
    (0, common_1.Get)('sales'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AnalyticsController.prototype, "getSalesAnalytics", null);
__decorate([
    (0, common_1.Post)('sales'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [analytics_dto_1.CreateSalesAnalyticsDto]),
    __metadata("design:returntype", Promise)
], AnalyticsController.prototype, "createSalesAnalytics", null);
__decorate([
    (0, common_1.Get)('marketing'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AnalyticsController.prototype, "getMarketingAnalytics", null);
__decorate([
    (0, common_1.Post)('marketing'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [analytics_dto_1.CreateMarketingAnalyticsDto]),
    __metadata("design:returntype", Promise)
], AnalyticsController.prototype, "createMarketingAnalytics", null);
exports.AnalyticsController = AnalyticsController = __decorate([
    (0, common_1.Controller)('analytics'),
    __metadata("design:paramtypes", [analytics_service_1.AnalyticsService])
], AnalyticsController);
//# sourceMappingURL=analytics.controller.js.map