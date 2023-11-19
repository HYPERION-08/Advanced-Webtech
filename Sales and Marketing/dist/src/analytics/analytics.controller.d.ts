import { AnalyticsService } from './analytics.service';
import { Analytics } from 'src/entities/analytics.entity';
import { Sale } from 'src/entities/sales.entity';
import { Customer } from 'src/entities/customer.entity';
import { CreateMarketingAnalyticsDto, CreateSalesAnalyticsDto, IncrementEndpointCountDto } from './dto/analytics.dto';
export declare class AnalyticsController {
    private readonly analyticsService;
    constructor(analyticsService: AnalyticsService);
    getAnalytics(): Promise<Analytics[]>;
    logEndpoint(data: IncrementEndpointCountDto): Promise<Analytics>;
    getSalesAnalytics(): Promise<any>;
    createSalesAnalytics(data: CreateSalesAnalyticsDto): Promise<Sale>;
    getMarketingAnalytics(): Promise<any>;
    createMarketingAnalytics(data: CreateMarketingAnalyticsDto): Promise<Customer>;
}
