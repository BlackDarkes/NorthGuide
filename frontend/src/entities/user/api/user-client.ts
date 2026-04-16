import { apiClient } from "@/libs/api";
import { extractData } from "@/shared/utils/extract-data";
import { TypeLoginSchema } from "../model/schemes/auth/login-schema";
import { TypeRegisterSchema } from "../model/schemes/auth/register-schema";
import { TypeProfileUpdateSchema } from "../model/schemes/profile/profile-update-schema";

export const userClient = {
  login: async (data: TypeLoginSchema) =>
    extractData(apiClient.auth.login(data)),

  register: async (data: TypeRegisterSchema) =>
    extractData(apiClient.auth.register(data)),

  logout: async () => extractData(apiClient.auth.logout()),

  refresh: async () => extractData(apiClient.auth.refresh()),

  me: async () => extractData(apiClient.user.me()),

  profileUpdate: async (data: TypeProfileUpdateSchema) =>
    extractData(apiClient.user.profileUpdate(data)),
};
