"use client";

import { useUserStore } from "@/features/auth/model/user-store";
import { Container } from "@/shared/ui";
import { Check, X } from "lucide-react";
import { ReactNode } from "react";

export const Header = () => {
  const { user } = useUserStore();

  const getStatus = (): ReactNode => {
    switch (user?.statusVerification) {
      case "PENDING": {
        return <span>Верификация в процессе</span>;
      }
      case "NOTVERIFIED":
      default: {
        return <span>Профиль не верифицирован</span>;
      }
    }
  };

  return (
    <header className="w-full bg-black/95 border-b border-zinc-800">
      <Container className="flex h-16 items-center gap-x-10 px-4">
        {user?.isVerification && user?.role === "GUIDE" ? (
          <div className="flex items-center gap-3 bg-zinc-900 px-4 py-2 rounded-xl border border-zinc-800">
            <div className="w-10 h-10 rounded-full bg-[#8FBC8F] flex items-center justify-center shrink-0">
              <Check className="w-6 h-6 text-black stroke-3" />
            </div>

            <div className="flex flex-col">
              <span className="text-white text-lg font-bold leading-tight">
                {user?.organizationName || "ИП ВАСЯ"}
              </span>
              <span className="text-zinc-400 text-sm leading-tight">
                {user?.organizationType === "EP" ? "Частное лицо" : "Компания"}
              </span>
            </div>
          </div>
        ) : user?.isVerification && user?.role === "USER" ? (
          <div className="flex items-center gap-3 bg-zinc-900 px-4 py-2 rounded-xl border border-zinc-800">
            <div className="w-10 h-10 rounded-full bg-[#8FBC8F] flex items-center justify-center shrink-0">
              <Check className="w-6 h-6 text-black stroke-3" />
            </div>

            <div className="flex flex-col">
              <span className="text-white text-lg font-bold leading-tight">
                {user?.name}
              </span>
              <span className="text-zinc-400 text-sm leading-tight">
                <span>Пользователь</span>
              </span>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-3 bg-zinc-900 px-4 py-2 rounded-xl border border-zinc-800">
            <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center shrink-0">
              <X className="w-6 h-6 text-white stroke-3" />
            </div>

            <div className="flex flex-col">{getStatus()}</div>
          </div>
        )}
      </Container>
    </header>
  );
};
