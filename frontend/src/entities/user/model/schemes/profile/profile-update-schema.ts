import { type infer as zInfer, object, string, email } from "zod";

const profileUpdateSchema = object({
  name: string().nullish(),
  phone: string().nullish(),
  email: email().nullish(),
  socialLinks: string().array().nullish(),
  organizationName: string().nullish(),
  organizationType: string().nullish(),
});

type TypeProfileUpdateSchema = zInfer<typeof profileUpdateSchema>;

export { profileUpdateSchema, type TypeProfileUpdateSchema };