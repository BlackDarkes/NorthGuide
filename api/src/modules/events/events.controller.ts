import { Body, Controller, Get, HttpCode, Param, Post } from "@nestjs/common";
import { EventsService } from "./events.service";
import { EventsRepository } from "./events.repository";
import { EventCreateDto } from "./common/dto/event-create.dto";

@Controller("events")
export class EventsController {
	constructor(
		private readonly eventsService: EventsService,
		private readonly eventsRepository: EventsRepository,
	) {}

	@Get("")
	@HttpCode(200)
	findAll() {
		return this.eventsRepository.getAll();
	}

	@Get(":id")
	@HttpCode(200)
	findById(@Param("id") id: string) {
		return this.eventsRepository.getById(id);
	}

	@Get("user")
	@HttpCode(200)
	findByUserId(@Body("") userId: string) {
		return this.eventsRepository.getUserEvents(userId);
	}

	@Get("title")
	@HttpCode(200)
	findByTitle(@Body("") title: string) {
		return this.eventsRepository.getByTitle(title);
	}

	@Post("")
	@HttpCode(201)
	create(@Body() data: EventCreateDto) {
		return this.eventsService.create(data);
	}
}
