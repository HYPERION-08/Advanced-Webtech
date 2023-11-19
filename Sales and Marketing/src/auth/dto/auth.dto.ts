import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString } from "class-validator";

export class AuthDto{
  @IsString()
  @ApiProperty()
  readonly name: string;
  
  @IsEmail()
  @ApiProperty()
  readonly email : string;

  @IsString()
  @ApiProperty()
  readonly password : string;

}
