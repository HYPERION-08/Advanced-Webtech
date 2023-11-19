export declare class Users {
    id: number;
    name: string;
    email: string;
    password: string;
    bio: string;
    location: string;
    website: string;
    twoFactorCode: string;
    hashPassword(): Promise<void>;
}
