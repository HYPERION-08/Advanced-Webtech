import { Controller,Get, Post ,Body } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';
import { Analytics } from 'src/entities/analytics.entity';
import { Sale } from 'src/entities/sales.entity';
import { Customer } from 'src/entities/customer.entity';
import { CreateMarketingAnalyticsDto, CreateSalesAnalyticsDto, IncrementEndpointCountDto } from './dto/analytics.dto';


@Controller('analytics')
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) {}

  @Get()
  getAnalytics() : Promise<Analytics[]>{
    return this.analyticsService.getAnalytics();
  }

  // @Post('log')
  // logEndpoint(@Body() data: {endpoint : string}) : Promise<Analytics>{
  //   return this.analyticsService.incrementEndpointCount(data.endpoint);
  // }


  @Post('log')
  logEndpoint(@Body() data: IncrementEndpointCountDto): Promise<Analytics> {
    return this.analyticsService.incrementEndpointCount(data);
  }


  @Get('sales')
  async getSalesAnalytics(): Promise<any>{
    const salesData = await this.analyticsService.getSalesAnalytics();
    return {salesData};
  }

  // @Post('sales')
  // async createSalesAnalytics(@Body() data:{productName : string, amount : number, customers : {name : string, email : string}[]}) : Promise<Sale>{
  //   const { productName, amount , customers } = data;
  //   return this.analyticsService.createSalesAnalytics(productName,amount,customers);
  // }


  @Post('sales')
  async createSalesAnalytics(@Body() data: CreateSalesAnalyticsDto): Promise<Sale> {
    return this.analyticsService.createSalesAnalytics(data);
  }





  @Get('marketing')
  async getMarketingAnalytics(): Promise<any>{
    const marketingData = await this.analyticsService.getMarketingAnalytics();
    return {marketingData};
  }

  // @Post('marketing')
  // async createMarketingAnalytics(@Body() data : {name : string, email : string, saleId : number}) : Promise<Customer>{
  //   const {name,email, saleId} = data;
  //   return this.analyticsService.createMarketingAnalytics(name,email,saleId);
  // }


  @Post('marketing')
  async createMarketingAnalytics(@Body() data: CreateMarketingAnalyticsDto): Promise<Customer> {
    return this.analyticsService.createMarketingAnalytics(data);
  }
}
