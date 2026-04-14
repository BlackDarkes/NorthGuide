import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface IBurgerStore {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  handleOpen: () => void;
}

export const useBurgerStore = create<IBurgerStore>()(
  devtools(
    (set) => ({
      isOpen: false,

      setIsOpen: (isOpen) => set({ isOpen }),
      handleOpen: () => set((state) => ({ isOpen: !state.isOpen })),
    }),
    {
      name: "burger-store",
    },
  ),
);
