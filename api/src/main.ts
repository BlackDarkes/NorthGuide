import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ConfigService } from "@nestjs/config";

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	const config = app.get(ConfigService);

	app.enableCors({
		origin: [
			config.getOrThrow<string>("CLIENT_URL"),
			config.getOrThrow<string>("ADMIN_URL"),
		],
		credentials: true,
		methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
		headers: "Content-Type, Accept, Authorization",
	});

	await app.listen(
		config.getOrThrow<string>("PORT"),
		config.getOrThrow<string>("HOST"),
	);
}
bootstrap();
