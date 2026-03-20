// middleware

import { UserService } from "@/modules/user/user.service";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { Request } from "express";
import { ExtractJwt, Strategy } from "passport-jwt";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
	constructor(
		private readonly configService: ConfigService,
		private readonly userService: UserService,
	) {
		super({
			jwtFromRequest: ExtractJwt.fromExtractors([
				(req: Request): string | null => {
					return req?.cookies?.["access_token"] ?? null;
				},
			]),
			ignoreExpiration: false,
			secretOrKey: configService.get<string>("JWT_SECRET"),
			algorithms: ["HS256"],
		});
	}
}
