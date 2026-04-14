/* eslint-disable @typescript-eslint/no-explicit-any */
import { TypeLoginSchema, TypeRegisterSchema, userClient } from "@/entities/user";
import { IUser } from "@/shared/types";
import { toast } from "sonner";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface IUserStore {
  user: IUser | undefined;
  isAuth: boolean;
  isLoading: boolean;
  error: string;

  login: (user: TypeLoginSchema) => Promise<void>;
  register: (user: TypeRegisterSchema) => Promise<void>;
  logout: () => Promise<void>;
  fetchUser: () => Promise<boolean>;
  setIsLoading: (isLoading: boolean) => void;
  setError: (error: string) => void;
}

export const useUserStore = create<IUserStore>()(
  devtools((set) => ({
    user: undefined,
    isAuth: false,
    isLoading: false,
    error: "",

    login: async (data: TypeLoginSchema) => {
        set({ isLoading: true, error: "" });
        try {
          const { message, user } = await userClient.login(data);
          set({ user, isAuth: true, isLoading: false });
          return message;
        } catch(error: any) {
          const errorMessage = error?.response?.data?.message || error.message;
          set({ error: errorMessage });
          throw new Error(errorMessage);
        } finally {
          set({ isLoading: false });
        }
      },
      register: async (data: TypeRegisterSchema) => {
        set({ isLoading: true, error: "" });
        try {
          const { data: res  } = await userClient.register(data);
          set({  isLoading: false });
          return res.message
        } catch(error: any) {
          const errorMessage = error?.response?.data?.message || error.message;
          set({ error: errorMessage });
        } finally {
          set({ isLoading: false });
        }
      },

      logout: async () => {
        try {
          await userClient.logout();
        } finally {
          toast.success("Вы успешно вышли из аккаунта");
          set({ user: undefined, isAuth: false });
        }
      },

      fetchUser: async () => {
        set({ isLoading: true, error: "" });
        try {
          const user = await userClient.me();
          set({ user, isAuth: true, isLoading: false });
          return true;
        } catch(error: any) {
          const errorMessage = error?.response?.data?.message || error.message;
          set({ error: errorMessage });
          return false;
        } finally {
          set({ isLoading: false });
        }
      },
  }), {
    name: "user-store",
  }),
);
