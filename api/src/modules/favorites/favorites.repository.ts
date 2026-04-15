import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FavoriteCreateDto } from "./common/dto/favorite-create.dto";

@Injectable()
export class FavoritesRepository {
	constructor(private readonly prismaService: PrismaService) {}

	async getAll() {
		return this.prismaService.client.favorites.findMany({
			include: {
				user: true,
				event: true,
			},
		});
	}

	async getById(id: string) {
		return this.prismaService.client.favorites.findUnique({
			where: { id },
			include: {
				user: true,
				event: true,
			},
		});
	}

	async getByUserId(userId: string) {
		return this.prismaService.client.favorites.findMany({
			where: {
				userId,
			},
      include: {
        user: true,
        event: true,
      }
		});
	}

	async getByEventId(eventId: string) {
		return this.prismaService.client.favorites.findMany({
			where: {
				eventId,
			},
      include: {
        user: true,
        event: true,
      }
		});
	}

	async create(data: FavoriteCreateDto) {
		return this.prismaService.client.favorites.create({ data });
	}

	async update(id: string, data: FavoriteCreateDto) {
		return this.prismaService.client.favorites.update({ where: { id }, data });
	}

	async remove(id: string) {
		return this.prismaService.client.favorites.delete({ where: { id } });
	}
}
