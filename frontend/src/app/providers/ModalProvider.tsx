import { BurgerModal } from "@/features/burger";
import { ReactNode } from "react";

interface IModalProviderProps {
  children: ReactNode;
}
  
export const ModalProvider = ({ children }: IModalProviderProps) => {
  return (
    <>
      {children}
      <BurgerModal />
    </>
  );
}