import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { ArrayMinSize, ArrayNotEmpty, IsEmail, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, Min, ValidateNested } from 'class-validator';

export class IncrementEndpointCountDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  endpoint: string;
}


class CustomerDto {
  @IsString()
  @ApiProperty()
  name: string;

  @IsString()
  @ApiProperty()
  email: string;
}

export class CreateSalesAnalyticsDto {
  @IsString()
  @ApiProperty()
  productName: string;

  @IsNumber()
  @ApiProperty()
  amount: number;

  @ArrayNotEmpty()
  // @ApiProperty()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => CustomerDto)
  customerData: CustomerDto[];
}

export class CreateMarketingAnalyticsDto {
  @IsString()
  @ApiProperty()
  name: string;

  @IsEmail()
  @ApiProperty()
  email: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  @ApiProperty()
  saleId?: number;
}