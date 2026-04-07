import { type infer as zInfer, email, object, string } from "zod";

const loginSchema = object({
  email: email("Некорректный email"),
  password: string().min(6),
});

type TypeLoginSchema = zInfer<typeof loginSchema>;

export { type TypeLoginSchema, loginSchema };