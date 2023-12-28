import { Body, Controller, Post, Get, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { SigninDto } from './dto/signin.dto';
import { AuthGuard } from './guards/auth/auth.guard';

@Controller('auth')
@UseGuards(AuthGuard)
export class AuthController {
  constructor(private readonly authService: AuthService) {}


  @Post('signup')
  signup(@Body() data : AuthDto){
    return this.authService.createUser(data);
  }

  @Post('signin')
  signin(@Body() data : SigninDto){
    return this.authService.signin(data);
  }
  

  @Get()
  getAll(){
    return this.authService.getAllProfile();
  }

}
