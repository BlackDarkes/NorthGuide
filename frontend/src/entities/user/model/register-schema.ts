import { type infer as zInfer, object, string, email } from "zod";

const registerSchema = object({
  email: email("Некорректный email"),
  name: string().min(2, "Имя пользователя не может быть пустым"),
  password: string()
    .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/, "Пароль должен содержать минимум 6 символов, хотя бы одну букву, одну цифру и один специальный символ")
    .min(6)
});

type TypeRegisterSchema = zInfer<typeof registerSchema>;

export { type TypeRegisterSchema, registerSchema };
