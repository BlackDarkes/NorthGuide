import { type infer as zInfer, object, string, email } from "zod";

const registerSchema = object({
  email: email("Некорректный email"),
  name: string("Имя пользователя не может быть пустым").min(2),
  password: string()
    .min(6)
    .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d]{6,}$/, {
      message:
        "Пароль должен содержать минимум 6 символов, хотя бы одну букву, одну цифру и один специальный символ",
    }),
})

type TypeRegisterSchema = zInfer<typeof registerSchema>;

export { type TypeRegisterSchema, registerSchema };