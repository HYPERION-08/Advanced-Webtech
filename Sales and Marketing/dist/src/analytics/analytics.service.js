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
exports.AnalyticsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const analytics_entity_1 = require("../entities/analytics.entity");
const customer_entity_1 = require("../entities/customer.entity");
const sales_entity_1 = require("../entities/sales.entity");
const typeorm_2 = require("typeorm");
let AnalyticsService = class AnalyticsService {
    constructor(analyticsRepository, saleRepository, customerRepository) {
        this.analyticsRepository = analyticsRepository;
        this.saleRepository = saleRepository;
        this.customerRepository = customerRepository;
    }
    async getAnalytics() {
        return this.analyticsRepository.find();
    }
    async incrementEndpointCount(dto) {
        let analyticsEntry = await this.analyticsRepository.findOne({ where: { endpoint: dto.endpoint } });
        if (analyticsEntry) {
            analyticsEntry.count++;
            await this.analyticsRepository.save(analyticsEntry);
        }
        else {
            const newAnalyticsEntry = this.analyticsRepository.create({
                endpoint: dto.endpoint,
                count: 1,
            });
            await this.analyticsRepository.save(newAnalyticsEntry);
            analyticsEntry = newAnalyticsEntry;
        }
        return analyticsEntry;
    }
    async getSalesAnalytics() {
        return this.saleRepository.find({ relations: ['customers'] });
    }
    async createSalesAnalytics(data) {
        const { productName, amount, customerData } = data;
        const sale = this.saleRepository.create({ productName, amount });
        if (customerData && customerData.length > 0) {
            const customers = customerData.map(customerDto => {
                const customer = this.customerRepository.create(customerDto);
                customer.sale = sale;
                return customer;
            });
            sale.customers = customers;
        }
        return this.saleRepository.save(sale);
    }
    async getMarketingAnalytics() {
        return this.customerRepository.find({ relations: ['sale'] });
    }
    async createMarketingAnalytics(data) {
        const { name, email, saleId } = data;
        const customer = this.customerRepository.create({ name, email });
        if (saleId) {
            const sale = await this.saleRepository.findOne({ where: { id: saleId } });
            if (sale) {
                customer.sale = sale;
            }
        }
        return this.customerRepository.save(customer);
    }
};
exports.AnalyticsService = AnalyticsService;
exports.AnalyticsService = AnalyticsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(analytics_entity_1.Analytics)),
    __param(1, (0, typeorm_1.InjectRepository)(sales_entity_1.Sale)),
    __param(2, (0, typeorm_1.InjectRepository)(customer_entity_1.Customer)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], AnalyticsService);
//# sourceMappingURL=analytics.service.js.map