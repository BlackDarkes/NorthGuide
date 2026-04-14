"use client";

import { ReactNode } from "react";
import { QueryProvider } from "./QueryProvider";
import { AuthProvider } from "./AuthProvider";
import { ModalProvider } from "./ModalProvider";

interface IAppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: IAppProviderProps) => {
  return (
    <QueryProvider>
      <AuthProvider>
        <ModalProvider>
          {children}
        </ModalProvider>
      </AuthProvider>
    </QueryProvider>
  );
};
