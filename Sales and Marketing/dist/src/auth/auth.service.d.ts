import { Users } from 'src/entities/users.entity';
import { Repository } from 'typeorm';
import { AuthDto } from './dto/auth.dto';
import { SigninDto } from './dto/signin.dto';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
export declare class AuthService {
    private readonly usersRepo;
    private jwtService;
    private config;
    constructor(usersRepo: Repository<Users>, jwtService: JwtService, config: ConfigService);
    createUser(data: AuthDto): Promise<Users>;
    findUser(data: SigninDto): Promise<boolean>;
    signin(data: SigninDto): Promise<string>;
    signToken(email: string, password: string): Promise<string>;
    getAllProfile(): Promise<Users[]>;
}
