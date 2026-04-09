"use client";

import { useUserStore } from "@/features/auth/model/user-store";
import { Container } from "@/shared/ui";
import { Check, X } from "lucide-react";
import { ReactNode } from "react";

export const Header = () => {
  const { user } = useUserStore();

  const getVerificationBlock = (): ReactNode => {
    if (user?.role === "USER") {
      return (
        <div className="flex items-center gap-3 rounded-lg border bg-card p-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/20">
            <Check className="h-5 w-5 text-green-500" />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-semibold text-foreground">
              {user?.name}
            </span>
            <span className="text-xs text-muted-foreground">
              Пользователь
            </span>
          </div>
        </div>
      );
    }

    if (user?.role === "GUIDE" && user?.isVerification) {
      return (
        <div className="flex items-center gap-3 rounded-lg border bg-card p-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/20">
            <Check className="h-5 w-5 text-green-500" />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-semibold text-foreground">
              {user?.organizationName || "ИП ВАСЯ"}
            </span>
            <span className="text-xs text-muted-foreground">
              {user?.organizationType === "EP" ? "Частное лицо" : "Компания"}
            </span>
          </div>
        </div>
      );
    }

    if (user?.role === "GUIDE" && !user?.isVerification) {
      const statusText = {
        PENDING: "Верификация в процессе",
        REJECTED: "Верификация отклонена",
        NOTVERIFIED: "Профиль не верифицирован",
        VERIFIED: "Профиль верифицирован",
      }[user?.statusVerification || "NOTVERIFIED"];

      return (
        <div className="flex items-center gap-3 rounded-lg border bg-card p-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500/20">
            <X className="h-5 w-5 text-red-500" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground">{statusText}</span>
          </div>
        </div>
      );
    }

    // ADMIN или неизвестная роль — ничего не показывать пока что
    return null;
  };

  return (
    <header className="w-full bg-background border-b">
      <Container className="flex items-center gap-x-10 py-4">
        {getVerificationBlock()}
      </Container>
    </header>
  );
};