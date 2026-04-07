import { BadRequestException, Injectable } from "@nestjs/common";
import { OrdersRepository } from "./orders.repository";
import { PrismaService } from "../prisma/prisma.service";
import { OrderCreateDto } from "./common/dto/order-create.dto";

@Injectable()
export class OrdersService {
	constructor(
		private readonly ordersRepository: OrdersRepository,
		private readonly prismaService: PrismaService,
	) {}

	async create(data: OrderCreateDto) {
    const existingOrder = await this.ordersRepository.getByUserIdAndEventId(data.userId, data.eventId);

    if (existingOrder) {
      throw new BadRequestException("Заказ уже существует");
    }

    return this.prismaService.client.orders.create({ data });
  }

  async remote(id: string) {
    const order = await this.ordersRepository.getById(id);

    if (!order) {
      throw new BadRequestException("Заказ не найден");
    }

    return this.prismaService.client.orders.delete({ where: { id } });
  }
}
