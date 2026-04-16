"use client";

import { useUserStore } from "@/features/auth/model/user-store";
import { BurgerModal } from "@/features/burger";
import { ProfileUpdateModal } from "@/features/profile-update";
import { useProfileUpdateStore } from "@/features/profile-update/model/profile-update-store";
import { ReactNode } from "react";

interface IModalProviderProps {
  children: ReactNode;
}

export const ModalProvider = ({ children }: IModalProviderProps) => {
  const { isOpen, setIsOpen } = useProfileUpdateStore();
  const { user } = useUserStore();

  return (
    <>
      {children}
      <BurgerModal />
      <ProfileUpdateModal
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        initialData={user}
      />
    </>
  );
};
