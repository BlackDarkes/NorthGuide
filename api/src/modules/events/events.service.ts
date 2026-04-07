import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { EventsRepository } from './events.repository';
import { EventCreateDto } from './common/dto/event-create.dto';

@Injectable()
export class EventsService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly eventsRepository: EventsRepository
  ) {}


  async create(data: EventCreateDto) {
    if (!data) {
      throw new BadRequestException("Неверные данные");
    }

    const existingEvent = await this.eventsRepository.getByTitle(data.title);

    if (existingEvent) {
      throw new BadRequestException("Событие с таким названием уже существует");
    }

    return this.prismaService.client.events.create({ data });
  }
}
