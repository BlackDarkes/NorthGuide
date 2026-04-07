import { ReactNode } from "react";
import { QueryProvider } from "./QueryProvider";

interface IAppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: IAppProviderProps) => {
  return <QueryProvider>{children}</QueryProvider>;
};
