import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Events } from "@/generated/prisma/client";

@Injectable()
export class EventsRepository {
  constructor(
    private readonly prismaService: PrismaService,
  ) {}

  async getAll(): Promise<Events[]> {
    return this.prismaService.client.events.findMany({
      include: {
        favorites: true,
      }
    });
  }

  async getById(id: string): Promise<Events | null> {
    return this.prismaService.client.events.findUnique({
      where: {
        id,
      },
      include: {
        favorites: true,
      }
    });
  }

  async getUserEvents(userId: string): Promise<Events[]> {
    return this.prismaService.client.events.findMany({
      where: {
        userId,
      },
      include: {
        favorites: true,
      }
    })
  }

  async getByTitle(title: string): Promise<Events | null> {
    return this.prismaService.client.events.findFirst({
      where: {
        title,
      },
      include: {
        favorites: true,
      }
    });
  }
}