import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString } from "class-validator";

export class SigninDto{

  @IsEmail()
  @ApiProperty()
  readonly email : string;
  @IsString()
  @ApiProperty()
  readonly password:string;
}