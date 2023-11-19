import { IsNotEmpty, IsNumber, IsPhoneNumber, IsString } from "class-validator";

export class CreateEmployeeDto {
  @IsNotEmpty()
  @IsString()
  readonly Employee : string;

  @IsNotEmpty()
  @IsNumber()
  readonly contact : number;

  @IsNotEmpty()
  @IsString()
  readonly username : string;

  @IsNotEmpty()
  @IsNumber()
  readonly password : number;


}