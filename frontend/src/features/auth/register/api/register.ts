import { TypeRegisterSchema, userClient } from "@/entities/user";
import { useMutation } from "@tanstack/react-query";

export const useRegister = () => {
  return useMutation({
    mutationKey: ["register"],
    mutationFn: async (data: TypeRegisterSchema) => {
      await userClient.register(data);
    }
  })
}