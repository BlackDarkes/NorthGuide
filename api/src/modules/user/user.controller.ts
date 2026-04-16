import {
	BadRequestException,
	Body,
	Controller,
	Get,
	HttpCode,
	Patch,
} from "@nestjs/common";
import { UserService } from "./user.service";
import { UserRepository } from "./user.repository";
import { CurrentUser } from "../../common/decorators/current-user.decorator";
import { hiddenPassword } from "@/utils/hidden-password.utils";
import { Auth } from "../auth/common/decorators/auth.decorator";
import { Prisma } from "@/generated/prisma/client";

@Controller("user")
export class UserController {
	constructor(
		private readonly userService: UserService,
		private readonly userRepository: UserRepository,
	) {}

	@Auth()
	@Get("me")
	@HttpCode(200)
	async getMe(@CurrentUser("id") userId: string) {
		const userResult = await this.userRepository.getById(userId);

		if (!userResult) {
			throw new BadRequestException("Пользователь не найден");
		}

		const user = hiddenPassword(userResult);

		return {
			...user,
		};
	}

	@Auth()
	@Patch()
	@HttpCode(200)
	async update(
		@CurrentUser("id") userId: string,
		@Body() data: Prisma.UsersUpdateInput,
	) {
		return this.userService.update(userId, data);
	}
}
