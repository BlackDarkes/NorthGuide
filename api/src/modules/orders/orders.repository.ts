import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class OrdersRepository {
	constructor(private readonly prismaService: PrismaService) {}

	async getAll() {
		return this.prismaService.client.orders.findMany();
	}

	async getById(id: string) {
		return this.prismaService.client.orders.findUnique({
			where: {
				id,
			},
		});
	}

	async getByUserId(userId: string) {
		return this.prismaService.client.orders.findMany({
			where: {
				userId,
			},
		});
	}

	async getByEventId(eventId: string) {
		return this.prismaService.client.orders.findMany({
			where: {
				eventId,
			},
		});
	}

	async getByUserIdAndEventId(userId: string, eventId: string) {
		return this.prismaService.client.orders.findMany({
			where: {
				userId,
				eventId,
			},
		});
	}

	async search(query: string) {
		return this.prismaService.client.orders.findMany({
			where: {
				OR: [
					{ event: { title: { contains: query } } },
					{ user: { name: { contains: query } } },
				],
			},
		});
	}
}
