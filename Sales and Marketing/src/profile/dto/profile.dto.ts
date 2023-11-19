import { IsEmail, IsString, IsOptional, IsUrl } from "class-validator";

export class ProfileDto{
  @IsString()
  readonly name : string;
  @IsEmail()
  readonly email : string;
  @IsString()
  readonly  : string;
  
  @IsString()
  @IsOptional()
  readonly bio: string;
  @IsString()
  @IsOptional()
  readonly location: string;
  @IsUrl()
  @IsOptional()
  readonly website: string;

}

export class Generate2FADto extends ProfileDto {
  @IsEmail()
  email: string;
}