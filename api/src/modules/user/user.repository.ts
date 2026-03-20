
import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Prisma } from "@/generated/prisma/client";

@Injectable()
export class UserRepository {
	constructor(private readonly prismaService: PrismaService) {}

	async getAll() {
		return this.prismaService.client.users.findMany();
	}

	async getById(id: string) {
		return this.prismaService.client.users.findUnique({
			where: {
				id,
			},
		});
	}

	async getByEmail(email: string) {
		return this.prismaService.client.users.findUnique({
			where: {
				email,
			},
		});
	}

	async getByProfuleId(profileId: string) {
		return this.prismaService.client.users.findFirst({
			where: {
				profileId,
			},
		});
	}

	async getAllVerificatedUser() {
		return this.prismaService.client.users.findMany({
			where: {
				isVerificated: true,
			},
		});
	}

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
      data,
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
