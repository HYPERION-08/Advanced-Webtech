import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/entities/users.entity';
import { Repository } from 'typeorm';
import { AuthDto } from './dto/auth.dto';
import { SigninDto } from './dto/signin.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';


@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepo : Repository<Users>,
    private jwtService: JwtService,
    private config: ConfigService,
  ){}


  // creates a user from the database
  async createUser(data:AuthDto){
    console.log(data)
    const user = await this.usersRepo.create(data);
    return await this.usersRepo.save(user);
  }


  // a function to find if the users are stored in the DB or not
  async findUser(data:SigninDto){
    const user = await this.usersRepo.findOne({
      where:{email:data.email},
    });

    if(user && (await bcrypt.compare(data.password,user.password)))
      return true;
    return false;
  }

  // uses the DB function to later confirm that there is a user
  async signin(data : SigninDto){
    if(await this.findUser(data)){
      return this.signToken(data.email, data.password);
    }
    throw new UnauthorizedException('Email or Password Error!!');
  }


  async signToken(email: string, password : string) {
    const payload = {
      email,
      password,
    };
    const secretKey = this.config.get('JWT_SECRET');

    const token = await this.jwtService.signAsync(payload, {
      expiresIn: '15m',
      secret: secretKey,
    });
    return token;
  }

  async getAllProfile(){
    return await this.usersRepo.find();
  }


}