// middleware
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { Request } from "express";
import { ExtractJwt, Strategy } from "passport-jwt";
import { IPayload } from "../../types/payload.interface";
import { AuthService } from "../../auth.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
	constructor(
		private readonly configService: ConfigService,
		private readonly authService: AuthService
	) {
		super({
			jwtFromRequest: ExtractJwt.fromExtractors([
				(req: Request): string | null => {
					return req?.cookies?.["access_token"] ?? null;
				},
			]),
			ignoreExpiration: false,
			secretOrKey: configService.getOrThrow<string>("JWT_SECRET"),
			algorithms: ["HS256"],
		});
	}

  async validate(payload: IPayload) {
    return this.authService.validate(payload);
  }
}
