"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const users_entity_1 = require("../entities/users.entity");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
let AuthService = class AuthService {
    constructor(usersRepo, jwtService, config) {
        this.usersRepo = usersRepo;
        this.jwtService = jwtService;
        this.config = config;
    }
    async createUser(data) {
        console.log(data);
        const user = await this.usersRepo.create(data);
        return await this.usersRepo.save(user);
    }
    async findUser(data) {
        const user = await this.usersRepo.findOne({
            where: { email: data.email },
        });
        if (user && (await bcrypt.compare(data.password, user.password)))
            return true;
        return false;
    }
    async signin(data) {
        if (await this.findUser(data)) {
            return this.signToken(data.email, data.password);
        }
        throw new common_1.UnauthorizedException('Email or Password Error!!');
    }
    async signToken(email, password) {
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
    async getAllProfile() {
        return await this.usersRepo.find();
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(users_entity_1.Users)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        jwt_1.JwtService,
        config_1.ConfigService])
], AuthService);
//# sourceMappingURL=auth.service.js.map