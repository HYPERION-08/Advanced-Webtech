import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { promises } from 'dns';
import { retry } from 'rxjs';
import { Analytics } from 'src/entities/analytics.entity';
import { Customer } from 'src/entities/customer.entity';
import { Sale } from 'src/entities/sales.entity';
import { Repository } from 'typeorm';
import { CreateMarketingAnalyticsDto, CreateSalesAnalyticsDto, IncrementEndpointCountDto } from './dto/analytics.dto';

@Injectable()
export class AnalyticsService {


  constructor(
  @InjectRepository(Analytics)
  private analyticsRepository : Repository<Analytics>,

  @InjectRepository(Sale)
  private saleRepository : Repository<Sale>,

  @InjectRepository(Customer)
  private customerRepository : Repository<Customer>,

  ){}

  async getAnalytics(): Promise<Analytics[]>{
    return this.analyticsRepository.find();
  }

  
//   async incrementEndpointCount(endpoint: string): Promise<Analytics> {
//     let analyticsEntry = await this.analyticsRepository.findOne({ where: { endpoint } });
  
//     if (analyticsEntry) {
//       analyticsEntry.count++;
//       await this.analyticsRepository.save(analyticsEntry);
//     } else {
//       const newAnalyticsEntry = this.analyticsRepository.create({
//         endpoint,
//         count: 1,
//       });
//       await this.analyticsRepository.save(newAnalyticsEntry);
//       analyticsEntry = newAnalyticsEntry;
//     }
  
//     return analyticsEntry;
//  }

async incrementEndpointCount(dto: IncrementEndpointCountDto): Promise<Analytics> {
  let analyticsEntry = await this.analyticsRepository.findOne({ where: { endpoint: dto.endpoint } });

  if (analyticsEntry) {
    analyticsEntry.count++;
    await this.analyticsRepository.save(analyticsEntry);
  } else {
    const newAnalyticsEntry = this.analyticsRepository.create({
      endpoint: dto.endpoint,
      count: 1,
    });
    await this.analyticsRepository.save(newAnalyticsEntry);
    analyticsEntry = newAnalyticsEntry;
  }

  return analyticsEntry;
}




 async getSalesAnalytics() : Promise<Sale[]>{
  return this.saleRepository.find({relations : ['customers']});
 }


// async createSalesAnalytics(productName : string,amount: number , customerData : {name : string, email : string}[]):Promise<Sale>{
//   const sale = this.saleRepository.create({productName,amount});

//   if (customerData && customerData.length > 0){
//     const customers = customerData.map(data=>{
//       const customer = this.customerRepository.create(data);
//       customer.sale = sale;
//       return customer;
//     });
//     sale.customers = customers;
//   }
//   return this.saleRepository.save(sale);
// }




async createSalesAnalytics(data: CreateSalesAnalyticsDto): Promise<Sale> {
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







 async getMarketingAnalytics(): Promise<Customer[]>{
  return this.customerRepository.find({relations:['sale']});
 }

// async createMarketingAnalytics(name : string, email : string , saleId: number) : Promise<Customer>{
//   const customer = this.customerRepository.create({name,email});

//   if (saleId){
//     const sale = await this.saleRepository.findOne({where : {id : saleId}});
//     if (sale){
//       customer.sale = sale;
//     }
//   }
//   return this.customerRepository.save(customer);
// }



async createMarketingAnalytics(data: CreateMarketingAnalyticsDto): Promise<Customer> {
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

  
}
