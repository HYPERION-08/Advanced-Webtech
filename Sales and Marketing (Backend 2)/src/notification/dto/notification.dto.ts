import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional } from 'class-validator';

export class NotificationDto {
  @IsString()
  @ApiProperty()
  content: string;

  @IsOptional()
  @ApiProperty()
  read?: boolean = false;
}