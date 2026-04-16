import { Injectable } from "@nestjs/common";
import { UserRepository } from "./user.repository";
import { Prisma } from "@/generated/prisma/client";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class UserService {
	constructor(
		private readonly userRepository: UserRepository,
		private readonly prismaService: PrismaService,
	) {}

	async create(data: Prisma.UsersCreateInput) {
		return this.prismaService.client.users.create({
			data,
		});
	}

	async update(id: string, data: Prisma.UsersUpdateInput) {
		return this.prismaService.client.users.update({
			where: {
				id,
			},
			data: data,
		});
	}

	async remove(id: string) {
		return this.prismaService.client.users.delete({
			where: {
				id,
			},
		});
	}
}
