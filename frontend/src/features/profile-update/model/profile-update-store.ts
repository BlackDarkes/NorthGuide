import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface IProfileUpdateStore {
  isOpen: boolean;

  setIsOpen: (isOpen: boolean) => void;
  handleOpen: () => void;
}

export const useProfileUpdateStore = create<IProfileUpdateStore>()(
  devtools(
    (set) => ({
      isOpen: false,
      setIsOpen: (isOpen) => set({ isOpen }),
      handleOpen: () => set((state) => ({ isOpen: !state.isOpen })),
    }),
    {
      name: "profile-update-store",
    },
  ),
);
