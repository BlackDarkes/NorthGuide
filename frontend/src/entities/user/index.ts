export {
  type TypeLoginSchema,
  loginSchema,
} from "./model/schemes/auth/login-schema";
export {
  type TypeRegisterSchema,
  registerSchema,
} from "./model/schemes/auth/register-schema";
export {
  type TypeProfileUpdateSchema,
  profileUpdateSchema,
} from "./model/schemes/profile/profile-update-schema";

export { userClient } from "./api/user-client";