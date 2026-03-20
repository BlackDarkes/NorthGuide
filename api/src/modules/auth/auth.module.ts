import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtConfig } from '@/config/jwt.config';
import { UserModule } from '../user/user.module';
import { JwtStrategy } from './common/strategy/jwt.strategy';
import { JwtGuard } from './common/guards/jwt.guard';

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: JwtConfig,
      inject: [ConfigService],
    }),
    UserModule
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, JwtGuard],
})
export class AuthModule {}
