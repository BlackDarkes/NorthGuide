
import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Users } from "@/generated/prisma/client";

@Injectable()
export class UserRepository {
	constructor(private readonly prismaService: PrismaService) {}

	async getAll(): Promise<Users[]> {
		return this.prismaService.client.users.findMany();
	}

	async getById(id: string): Promise<Users | null> {
		return this.prismaService.client.users.findUnique({
			where: {
				id,
			},
		});
	}

	async getByEmail(email: string): Promise<Users | null>  {
		return this.prismaService.client.users.findUnique({
			where: {
				email,
			},
		});
	}

	async getByProfileId(profileId: string): Promise<Users | null>  {
		return this.prismaService.client.users.findFirst({
			where: {
				profileId,
			},
		});
	}

	async getAllVerificationUser(): Promise<Users[]>  {
		return this.prismaService.client.users.findMany({
			where: {
				isVerification: true,
			},
		});
	}
}
