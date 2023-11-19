import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { SigninDto } from './dto/signin.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signup(data: AuthDto): Promise<import("../entities/users.entity").Users>;
    signin(data: SigninDto): Promise<string>;
    getAll(): Promise<import("../entities/users.entity").Users[]>;
}
