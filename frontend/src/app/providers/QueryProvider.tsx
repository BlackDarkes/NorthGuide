import { queryClient } from "@/libs/query-client/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

interface IQueryProviderProps {
  children: ReactNode;
}

export const QueryProvider = ({ children }: IQueryProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
