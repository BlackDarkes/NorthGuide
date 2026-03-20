import { Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { IPayload } from "./types/payload.interface";
import { TypeLoginDto } from "./common/dto/login.dto";
import { UserRepository } from "@/modules/user/user.repository";
import { hash, compare } from "bcryptjs";
import { TypeRegisterDto } from "./common/dto/register.dto";
import { UserService } from "../user/user.service";
import { v4 as uuid } from "uuid";

@Injectable()
export class AuthService {
	private TTL_ACCESS_TOKEN: string;
	private TTL_REFRESH_TOKEN: string;

	constructor(
		private readonly conifgService: ConfigService,
		private readonly userRepository: UserRepository,
    private readonly userServise: UserService,
		private readonly jwtService: JwtService,
	) {
		this.TTL_ACCESS_TOKEN =
			conifgService.getOrThrow<string>("TTL_ACCESS_TOKEN");
		this.TTL_REFRESH_TOKEN =
			conifgService.getOrThrow<string>("TTL_REFRESH_TOKEN");
	}

  async register(data: TypeRegisterDto) {
    const { email, name, password } = data;
    const existingUser = await this.userRepository.getByEmail(email);

    if (existingUser) {
      throw new UnauthorizedException("Пользователь с таким email уже существует");
    }

    const id = uuid();

    await this.userServise.create({
      email,
      name,
      password: await hash(password, 10),
      profileId: this.generateProfileId(id),
    })
  }

  async login(data: TypeLoginDto) {
    const { email, password } = data;

    const existingUser  = await this.userRepository.getByEmail(email);

    if (!existingUser || !(await compare(password, existingUser.password))) {
      throw new UnauthorizedException("Неправильный логин или пароль");
    }

    return existingUser;
  }

	async validate(payload: IPayload) {}

  private generateProfileId(id: string) {
    return `profile_${id.split("-")[0]}`;
  }
}
