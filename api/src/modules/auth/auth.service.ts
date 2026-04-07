import { Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { IPayload } from "./types/payload.interface";
import { LoginDto } from "./common/dto/login.dto";
import { UserRepository } from "@/modules/user/user.repository";
import { hash, compare } from "bcryptjs";
import { RegisterDto } from "./common/dto/register.dto";
import { UserService } from "../user/user.service";
import { v4 as uuid } from "uuid";
import { Request, Response } from "express";
import { EnumUserRole } from "@/generated/prisma/enums";

@Injectable()
export class AuthService {
	private TTL_ACCESS_TOKEN: string;
	private TTL_REFRESH_TOKEN: string;
	private COOKIE_DOMAIN: string | undefined;

	constructor(
		private readonly configService: ConfigService,
		private readonly userRepository: UserRepository,
		private readonly userService: UserService,
		private readonly jwtService: JwtService,
	) {
		this.TTL_ACCESS_TOKEN =
			configService.getOrThrow<string>("TTL_ACCESS_TOKEN");
		this.TTL_REFRESH_TOKEN =
			configService.getOrThrow<string>("TTL_REFRESH_TOKEN");
		this.COOKIE_DOMAIN = this.configService.get<string>("COOKIE_DOMAIN");
	}

	async register(data: RegisterDto) {
		const { email, name, password } = data;
		const existingUser = await this.userRepository.getByEmail(email);

		if (existingUser) {
			throw new UnauthorizedException(
				"Пользователь с такой почтой уже зарегистрирован",
			);
		}

		const id = uuid();
		const profileId = this.createProfileId(id);

		await this.userService.create({
			email,
			name,
			password: await hash(password, 10),
			role: "USER",
			profileId,
			isVerification: false,
		});
	}

	async login(res: Response, data: LoginDto) {
		const { email, password } = data;
		const user = await this.userRepository.getByEmail(email);

		if (!user || !(await compare(password, user.password))) {
			throw new UnauthorizedException("Неверный логин или пароль");
		}

		await this.auth(res, user.id, user.email, user.profileId, user.role);
		return user;
	}

	validate(payload: IPayload) {
		const { id } = payload;

		const user = this.userRepository.getById(id);

		if (!user) {
			throw new UnauthorizedException("Пользователь не найден");
		}

		return user;
	}

	async logout(res: Response) {
		return this.clearTokens(res);
	}

	async refresh(req: Request, res: Response) {
		const refreshToken = req.cookies?.["refresh_token"];

		if (!refreshToken) {
			throw new UnauthorizedException("Пользователь не авторизован");
		}

		try {
			const payload: IPayload = this.jwtService.verify(refreshToken);
			const user = await this.userRepository.getById(payload.id);

			if (!user) {
				throw new UnauthorizedException("Пользователь не найден");
			}

			await this.auth(res, user.id, user.email, user.profileId, user.role);

			return user;
		} catch {
			this.clearTokens(res);
			throw new UnauthorizedException("Пользователь не авторизован");
		}
	}

	private crateTokens = (
		id: string,
		email: string,
		profileId: string,
		role: EnumUserRole | null,
	) => {
		const payload: IPayload = { id, email, profileId, role };

		const access_token = this.jwtService.sign(payload, {
			expiresIn: this.TTL_ACCESS_TOKEN,
		} as any);

		const refresh_token = this.jwtService.sign(payload, {
			expiresIn: this.TTL_REFRESH_TOKEN,
		} as any);

		return { access_token, refresh_token };
	};

	private setCookie(
		res: Response,
		name: string,
		value: string,
		expires?: Date,
	) {
		const secure = this.isSecureContext();

		res.cookie(name, value, {
			httpOnly: true,
			secure,
			sameSite: secure ? "none" : "lax",
			path: "/",
			expires,
			// 🔥 domain: НИКОГДА для localhost
			...(secure && this.COOKIE_DOMAIN ? { domain: this.COOKIE_DOMAIN } : {}),
		});
	}

	private clearTokens(res: Response) {
		const secure = this.isSecureContext();

		const options: any = {
			httpOnly: true,
			secure,
			sameSite: secure ? "none" : "lax",
			path: "/",
			expires: new Date(0),
		};

		if (secure && this.COOKIE_DOMAIN) {
			options.domain = this.COOKIE_DOMAIN;
		}

		res.cookie("access_token", "", options);
		res.cookie("refresh_token", "", options);
	}

	private async auth(
		res: Response,
		id: string,
		email: string,
		profileId: string,
		role: EnumUserRole | null,
	) {
		const { access_token, refresh_token } = this.crateTokens(
			id,
			email,
			profileId,
			role,
		);

		const accessTokenExpires = new Date(Date.now() + 1000 * 60 * 60); // 1 hours
		const refreshTokenExpires = new Date(Date.now() + 1000 * 60 * 60 * 24 * 30); // 30 days

		this.setCookie(res, "access_token", access_token, accessTokenExpires);
		this.setCookie(res, "refresh_token", refresh_token, refreshTokenExpires);
	}

	private createProfileId(id: string) {
		return `profile-${id}`;
	}

	private isSecureContext(): boolean {
		return process.env.NODE_ENV === "production";
	}
}
