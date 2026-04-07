import { apiClient } from "@/libs/api";
import { extractData } from "@/shared/utils/extract-data";
import { TypeLoginSchema } from "../model/login-schema";
import { TypeRegisterSchema } from "../model/register-schema";

export const userClient = {
  login: async (data: TypeLoginSchema) => 
    extractData(apiClient.auth.login(data)),

  register: async (data: TypeRegisterSchema) => 
    extractData(apiClient.auth.register(data)),

  logout: async () => extractData(apiClient.auth.logout()),

  refresh: async () => extractData(apiClient.auth.refresh()),

  me: async () => extractData(apiClient.user.me()),
}