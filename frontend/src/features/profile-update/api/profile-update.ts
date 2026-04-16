"use client";

import { TypeProfileUpdateSchema, userClient } from "@/entities/user";
import { useUserStore } from "@/features/auth/model/user-store";
import { useMutation } from "@tanstack/react-query"
import { useProfileUpdateStore } from "../model/profile-update-store";

export const useProfileUpdate = () => {
  return useMutation({
    mutationKey: ["profile-update"],
    mutationFn: async (data: TypeProfileUpdateSchema) => {
      await userClient.profileUpdate(data);
    },
    onSuccess: () => {
      const { fetchUser } = useUserStore.getState();
      const { setIsOpen } = useProfileUpdateStore.getState();
      
      fetchUser();
      setIsOpen(false);
    }
  })
}