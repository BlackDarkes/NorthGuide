import { Body, Controller, HttpCode, Post, Req, Res } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { RegisterDto } from "./common/dto/register.dto";
import { LoginDto } from "./common/dto/login.dto";
import { Request, Response } from "express";
import { Users } from "@/generated/prisma/client";

@Controller("auth")
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@Post("register")
	@HttpCode(201)
	async register(@Body() data: RegisterDto) {
		await this.authService.register(data);

		return {
			message: "Пользователь успешно зарегистрирован",
		};
	}

	@Post("login")
	@HttpCode(200)
	async login(
		@Res({ passthrough: true }) res: Response,
		@Body() data: LoginDto,
	) {
		const resultUser = await this.authService.login(res, data);

		const user = this.hidenPassword(resultUser);

		return {
			message: "Пользователь успешно авторизован",
			user,
		};
	}

	@Post("logout")
	@HttpCode(200)
	async logout(@Res({ passthrough: true }) res: Response) {
		await this.authService.logout(res);

		return {
			message: "Вы успешно вышли из аккаунта",
		};
	}

	@Post("refresh")
	@HttpCode(200)
	async refresh(
		@Req() req: Request,
		@Res({ passthrough: true }) res: Response,
	) {
		const resultUser = await this.authService.refresh(req, res);

		const user = this.hidenPassword(resultUser);

		return {
			message: "Токены успешно обновлены",
			user,
		};
	}

	private hidenPassword(user: Users) {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { password, ...result } = user;
		return result;
	}
}
