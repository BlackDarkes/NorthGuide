import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Pool } from 'pg';
import { PrismaClient } from 'src/generated/prisma/client';
import { PrismaPg } from "@prisma/adapter-pg";

@Injectable()
export class PrismaService implements OnModuleInit, OnModuleDestroy {
  public client: PrismaClient;
  constructor(
    private readonly configService: ConfigService,
  ) {
    const pool = new Pool({
      connectionString: configService.get<string>("DATABASE_URL"),
    })

    const adapter = new PrismaPg(pool);

    this.client = new PrismaClient({
      adapter,
    })
  }

  async onModuleInit() {
    return this.client.$connect();
  }

  async onModuleDestroy() {
    return this.client.$disconnect();
  }
}
