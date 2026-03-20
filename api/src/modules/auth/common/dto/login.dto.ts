import { type infer as zInfer, object, email, string } from "zod";
import { createZodDto } from "nestjs-zod";

const loginSchema = object({
	email: email("Некорректный email"),
	password: string().min(6),
});

type TypeRegisterDto = zInfer<typeof loginSchema>;

class LoginDto extends createZodDto(loginSchema) {}

export { type TypeRegisterDto, LoginDto };