import { Module } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';
import { AnalyticsController } from './analytics.controller';
import { Analytics } from 'src/entities/analytics.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sale } from 'src/entities/sales.entity';
import { Customer } from 'src/entities/customer.entity';

@Module({
  imports : [TypeOrmModule.forFeature([Analytics]),TypeOrmModule.forFeature([Sale]),TypeOrmModule.forFeature([Customer])],
  controllers: [AnalyticsController],
  providers: [AnalyticsService],
})
export class AnalyticsModule {}
