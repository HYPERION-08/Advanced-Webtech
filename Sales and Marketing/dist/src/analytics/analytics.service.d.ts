import { Analytics } from 'src/entities/analytics.entity';
import { Customer } from 'src/entities/customer.entity';
import { Sale } from 'src/entities/sales.entity';
import { Repository } from 'typeorm';
import { CreateMarketingAnalyticsDto, CreateSalesAnalyticsDto, IncrementEndpointCountDto } from './dto/analytics.dto';
export declare class AnalyticsService {
    private analyticsRepository;
    private saleRepository;
    private customerRepository;
    constructor(analyticsRepository: Repository<Analytics>, saleRepository: Repository<Sale>, customerRepository: Repository<Customer>);
    getAnalytics(): Promise<Analytics[]>;
    incrementEndpointCount(dto: IncrementEndpointCountDto): Promise<Analytics>;
    getSalesAnalytics(): Promise<Sale[]>;
    createSalesAnalytics(data: CreateSalesAnalyticsDto): Promise<Sale>;
    getMarketingAnalytics(): Promise<Customer[]>;
    createMarketingAnalytics(data: CreateMarketingAnalyticsDto): Promise<Customer>;
}
