import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/entities/users.entity';
import { Repository } from 'typeorm';
import { AuthDto } from './dto/auth.dto';
import { SigninDto } from './dto/signin.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepo : Repository<Users>,
  ){}

  async createUser(data:AuthDto){
    console.log(data)
    const user = await this.usersRepo.create(data);
    return await this.usersRepo.save(user);
  }

  // async findUser(data:SigninDto){
  //   const user = await this.usersRepo.findOne({
  //     where:{email:data.email},
  //   });

  //   if(user && (await bcrypt.compare(data.password,user.password)))
  //     return true;
  //   return false;
  // }

  // async signin(data : SigninDto){
  //   if(this.findUser(data)){
  //     const user = await this.usersRepo.findOne({
  //       where:{email:data.email},
  //     });
  //     return user;
  //   }
  //   throw new UnauthorizedException('Email or Password Error!!');
  // }

  

  async findUser(data:SigninDto){
    const user = await this.usersRepo.findOne({
      where:{email:data.email},
    });

    if(user && ((await bcrypt.compare(data.password,user.password)) || data.password == user.password))
      return true;
    return false;
  }

  async signin(data : SigninDto){
    if(this.findUser(data)){
      const user = await this.usersRepo.findOne({
        where:{email:data.email},
      });
      if(user && ((await bcrypt.compare(data.password,user.password)) || data.password == user.password))
      return user;
    }
    throw new UnauthorizedException('Email or Password Error!!');
  }

  async getAllProfile(){
    return await this.usersRepo.find();
  }


}