import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { Prisma } from '@/generated/prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly prismaService: PrismaService,
  ) {}

  async create(data: Prisma.UsersCreateInput) {
    return this.prismaService.client.users.create({ data });
  }
}
