import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	Param,
	Post,
} from "@nestjs/common";
import { OrdersService } from "./orders.service";
import { OrdersRepository } from "./orders.repository";
import { Auth } from "../auth/common/decorators/auth.decorator";
import { CurrentUser } from "../../common/decorators/current-user.decorator";
import { OrderCreateDto } from "./common/dto/order-create.dto";

@Controller("orders")
export class OrdersController {
	constructor(
		private readonly ordersService: OrdersService,
		private readonly ordersRepository: OrdersRepository,
	) {}

	@Auth()
	@Get("")
	@HttpCode(200)
	async getAll() {
		return this.ordersRepository.getAll();
	}

	@Auth()
	@Get(":id")
	@HttpCode(200)
	async getById(id: string) {
		return this.ordersRepository.getById(id);
	}

	@Auth()
	@Get("user")
	@HttpCode(200)
	async getByCurrentUser(@CurrentUser("id") userId: string) {
		return this.ordersRepository.getByUserId(userId);
	}

	@Auth()
	@Get("user/:userId")
	@HttpCode(200)
	async getByUserId(@Param("userId") userId: string) {
		return this.ordersRepository.getByUserId(userId);
	}

	@Auth()
	@Get("event/:eventId")
	@HttpCode(200)
	async getByEventId(@Param("eventId") eventId: string) {
		return this.ordersRepository.getByEventId(eventId);
	}

	@Auth()
	@Get("user/event/:eventId")
	@HttpCode(200)
	async getByCurrentUserAndEventId(
		@CurrentUser("id") userId: string,
		@Param("eventId") eventId: string,
	) {
		return this.ordersRepository.getByUserIdAndEventId(userId, eventId);
	}

	@Auth()
	@Get("event/:eventId/user/:userId")
	@HttpCode(200)
	async getByEventIdAndUserId(
		@Param("eventId") eventId: string,
		@Param("userId") userId: string,
	) {
		return this.ordersRepository.getByUserIdAndEventId(userId, eventId);
	}

	@Auth()
	@Get("search/:query")
	@HttpCode(200)
	async search(query: string) {
		return this.ordersRepository.search(query);
	}

  @Auth()
	@Post()
	@HttpCode(201)
	async create(@Body() data: OrderCreateDto) {
		return this.ordersService.create(data);
	}

	@Auth()
	@Delete(":id")
	@HttpCode(200)
	async remote(@Param("id") id: string) {
		return this.ordersService.remote(id);
	}
}
