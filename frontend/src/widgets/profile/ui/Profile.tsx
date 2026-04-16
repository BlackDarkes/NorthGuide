"use client";

import { useUserStore } from "@/features/auth/model/user-store";
import { Container } from "@/shared/ui";
import { cn } from "@/shared/lib/utils";
import Link from "next/link";
import {
  Phone,
  Mail,
  Link as LinkIcon,
  Hash,
  Building2,
  User,
  Pen,
} from "lucide-react";
import { ProfileSkeleton } from "./ProfileSkeleton";
import { useProfileUpdateStore } from "@/features/profile-update/model/profile-update-store";

const getDomainFromUrl = (url: string) => {
  try {
    return new URL(url).hostname.replace("www.", "");
  } catch {
    return url;
  }
};

export const Profile = () => {
  const { user } = useUserStore();
  const { handleOpen } = useProfileUpdateStore();

  if (!user) return <ProfileSkeleton />; //  Skeleton/Loader

  return (
    <section className="py-8 md:py-12">
      <Container>
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="size-14 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <User className="size-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tight">
                  Мой профиль
                </h2>
                <p className="text-sm text-muted-foreground">
                  Личные данные и настройки аккаунта
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={handleOpen}
              className={cn(
                "p-2 rounded-full transition-all duration-300",
                "hover:bg-foreground hover:text-background",
              )}
            >
              <Pen className="size-4" />
            </button>
          </div>

          <div className="bg-card border border-border/50 rounded-xl p-6 shadow-sm space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <InfoField icon={<Phone className="size-4" />} label="Телефон">
                {user.phone || (
                  <span className="text-muted-foreground/70 italic">
                    Не указан
                  </span>
                )}
              </InfoField>
              <InfoField icon={<Mail className="size-4" />} label="Email">
                {user.email || (
                  <span className="text-muted-foreground/70 italic">
                    Не указан
                  </span>
                )}
              </InfoField>
            </div>

            <div className="h-px bg-border/50" />

            <InfoField
              icon={<LinkIcon className="size-4" />}
              label="Социальные ссылки"
            >
              {user.socialLinks?.length ? (
                <div className="flex flex-wrap gap-2 mt-1">
                  {user.socialLinks.map((link, i) => (
                    <Link
                      key={i}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full border bg-secondary/50 hover:bg-secondary hover:text-foreground transition-colors"
                    >
                      <LinkIcon className="size-3" />
                      {getDomainFromUrl(link)}
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-muted-foreground/70 italic mt-1">
                  Ссылки не добавлены
                </p>
              )}
            </InfoField>

            <div className="h-px bg-border/50" />

            <InfoField icon={<Hash className="size-4" />} label="ID профиля">
              <code className="bg-muted px-2 py-0.5 rounded text-sm font-mono text-foreground">
                {user.profileId || "—"}
              </code>
            </InfoField>

            {user.role === "GUIDE" && (
              <>
                <div className="h-px bg-border/50" />
                <div className="bg-primary/5 border border-primary/10 rounded-lg p-4 space-y-3">
                  <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                    <Building2 className="size-4" />
                    Данные гида
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <InfoField label="Организация" className="pl-0!">
                      {user.organizationName || (
                        <span className="text-muted-foreground/70 italic">
                          Не указана
                        </span>
                      )}
                    </InfoField>
                    <InfoField label="Тип организации" className="pl-0!">
                      {user.organizationType || (
                        <span className="text-muted-foreground/70 italic">
                          Не указан
                        </span>
                      )}
                    </InfoField>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

function InfoField({
  icon,
  label,
  children,
  className,
}: {
  icon?: React.ReactNode;
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("space-y-1.5", className)}>
      <div className="flex items-center gap-2 text-muted-foreground">
        {icon}
        <span className="text-xs font-medium uppercase tracking-wider">
          {label}
        </span>
      </div>
      <div className="text-sm font-medium text-foreground wrap-break-word">
        {children}
      </div>
    </div>
  );
}
