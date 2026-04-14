import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { PrismaModule } from './modules/prisma/prisma.module';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { EventsModule } from './modules/events/events.module';
import { OrdersModule } from './modules/orders/orders.module';
import { FavoritesModule } from './modules/favorites/favorites.module';

@Module({
	imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    PrismaModule,
    UserModule,
    AuthModule,
    EventsModule,
    OrdersModule,
    FavoritesModule
  ],
})
export class AppModule {}
