import { Body, Controller, Delete, Get, HttpCode, Param, Post } from "@nestjs/common";
import { FavoritesService } from "./favorites.service";
import { CurrentUser } from "@/common/decorators/current-user.decorator";
import { FavoriteCreateDto } from "./common/dto/favorite-create.dto";

@Controller("favorites")
export class FavoritesController {
	constructor(private readonly favoritesService: FavoritesService) {}

	@Get("")
	@HttpCode(200)
	async getAll() {
		return this.favoritesService.getAll();
	}

	@Get(":id")
	@HttpCode(200)
	async getById(@Param("id") id: string) {
		return this.favoritesService.getById(id);
	}

	@Get("/user")
	@HttpCode(200)
	async getByCurrentUserId(@CurrentUser("id") userId: string) {
		return this.favoritesService.getByUserId(userId);
	}

	@Get("/user/:id")
	@HttpCode(200)
	async getByUserId(@Param("id") userId: string) {
		return this.favoritesService.getByUserId(userId);
	}

	@Get("/event/:id")
	@HttpCode(200)
	async getByEventId(@Param("id") eventId: string) {
		return this.favoritesService.getByEventId(eventId);
	}

	@Post("")
	@HttpCode(201)
	async create(@Body() data: FavoriteCreateDto) {
		return this.favoritesService.create(data);
	}

  @Delete(":id")
  @HttpCode(200)
  async remove(@Param("id") id: string) {
    return this.favoritesService.remove(id);
  }
}
