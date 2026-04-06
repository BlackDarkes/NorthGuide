import { type infer as zInfer, object, email, string } from "zod";
import { createZodDto } from "nestjs-zod";

export const registerDtoSchema = object({
	email: email("Некорректный email"),
	name: string("Имя пользователя не может быть пустым").min(2),
	password: string()
		.min(6)
		.regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d]{6,}$/, {
			message:
				"Пароль должен содержать минимум 6 символов, хотя бы одну букву, одну цифру и один специальный символ",
		}),
});

 class RegisterDto extends createZodDto(registerDtoSchema) implements TypeRegisterDto {}

type TypeRegisterDto = zInfer<typeof registerDtoSchema>;

export { type TypeRegisterDto, RegisterDto };
