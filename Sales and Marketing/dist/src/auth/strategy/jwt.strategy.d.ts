import { ConfigService } from '@nestjs/config';
import { AuthService } from '../auth.service';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private userSerive;
    constructor(userSerive: AuthService, config: ConfigService);
    validate(payload: {
        email: string;
        password: string;
    }): Promise<boolean>;
}
export {};
