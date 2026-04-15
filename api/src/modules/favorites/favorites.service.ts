import { BadRequestException, Injectable } from "@nestjs/common";
import { FavoritesRepository } from "./favorites.repository";
import { TypeFavoriteCreateDto } from "./common/dto/favorite-create.dto";
import { UserRepository } from "../user/user.repository";
import { EventsRepository } from "../events/events.repository";

@Injectable()
export class FavoritesService {
	constructor(
		private readonly favoritesRepository: FavoritesRepository,
		private readonly userRepository: UserRepository,
		private readonly eventsRepository: EventsRepository,
	) {}

	async getAll() {
		return this.favoritesRepository.getAll();
	}

	async getById(id: string) {
		return this.favoritesRepository.getById(id);
	}

	async getByUserId(userId: string) {
		return this.favoritesRepository.getByUserId(userId);
	}

	async getByEventId(eventId: string) {
		return this.favoritesRepository.getByEventId(eventId);
	}

	async create(data: TypeFavoriteCreateDto) {
		const { userId, eventId } = data;

    await this.getExistingUserAndEvent(userId, eventId);

		return this.favoritesRepository.create(data);
	}

	async remove(id: string) {
    const favorite = await this.favoritesRepository.getById(id);

    if (!favorite) {
      throw new BadRequestException("Избранное не найдено");
    }

		return this.favoritesRepository.remove(id);
	}

	private async getExistingUserAndEvent(userId: string, eventId: string): Promise<boolean> {
		const existingUser = await this.userRepository.getById(userId);
		const existingEvent = await this.eventsRepository.getById(eventId);

		if (!existingUser) {
			throw new BadRequestException("Пользователь не найден");
		}

		if (!existingEvent) {
			throw new BadRequestException("Событие не найдено");
		}

    return true
	}
}
