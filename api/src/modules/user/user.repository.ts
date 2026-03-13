import { Prisma, PrismaClient } from "@/generated/prisma/client";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UserRepository {
	constructor(private readonly prismaClient: PrismaClient) {}

	async getAll() {
		return this.prismaClient.users.findMany();
	}

	async getById(id: string) {
		return this.prismaClient.users.findUnique({
			where: {
				id,
			},
		});
	}

	async getByEmail(email: string) {
		return this.prismaClient.users.findUnique({
			where: {
				email,
			},
		});
	}

	async getByProfuleId(profileId: string) {
		return this.prismaClient.users.findFirst({
			where: {
				profileId,
			},
		});
	}

	async getAllVerificatedUser() {
		return this.prismaClient.users.findMany({
			where: {
				isVerificated: true,
			},
		});
	}

  async create(data: Prisma.UsersCreateInput) {
    return this.prismaClient.users.create({
      data,
    });
  }

  async update(id: string, data: Prisma.UsersUpdateInput) {
    return this.prismaClient.users.update({
      where: {
        id,
      },
      data,
    });
  }

  async remove(id: string) {
    return this.prismaClient.users.delete({
      where: {
        id,
      },
    });
  }
}
