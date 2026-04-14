import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FavoriteCreateDto } from "./common/dto/favorite-create.dto";

@Injectable()
export class FavoritesRepository {
	constructor(private readonly prismaService: PrismaService) {}

	async getAll() {
		return this.prismaService.client.favorites.findMany();
	}

	async getById(id: string) {
		return this.prismaService.client.favorites.findUnique({ where: { id } });
	}

  async getByUserId(userId: string) {
    return this.prismaService.client.favorites.findMany({
      where: {
        userId,
      },
    });
  }

  async getByEventId(eventId: string) {
    return this.prismaService.client.favorites.findMany({
      where: {
        eventId,
      },
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
