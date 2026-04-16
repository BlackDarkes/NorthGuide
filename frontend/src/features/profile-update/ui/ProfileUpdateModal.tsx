"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/shared/ui/dialog";
import { Button } from "@/shared/ui/button";
import { IUser } from "@/shared/types";
import { SubmitHandler, useForm } from "react-hook-form";
import { profileUpdateSchema, TypeProfileUpdateSchema } from "@/entities/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { useProfileUpdate } from "../api/profile-update";
import { InputField, Separator } from "@/shared/ui";
import { User, Phone, Mail, Building2, Loader2 } from "lucide-react";
import { toast } from "sonner";

interface ProfileUpdateModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  initialData: IUser | undefined;
}

export const ProfileUpdateModal = ({
  isOpen,
  onOpenChange,
  initialData,
}: ProfileUpdateModalProps) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<TypeProfileUpdateSchema>({
    defaultValues: {
      name: initialData?.name,
      phone: initialData?.phone,
      email: initialData?.email,
      socialLinks: initialData?.socialLinks,
      organizationName: initialData?.organizationName,
      organizationType: initialData?.organizationType,
    },
    resolver: zodResolver(profileUpdateSchema),
  });

  const { mutate: profileUpdate, isPending } = useProfileUpdate();

  const onSubmit: SubmitHandler<TypeProfileUpdateSchema> = (data) => {
    try {
      profileUpdate(data);
      onOpenChange(false);
      toast.success("Профиль успешно обновлен");
    } catch {
      toast.error("Не удалось обновить профиль");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg p-6 space-y-6">
        <DialogHeader className="space-y-2">
          <DialogTitle className="text-xl font-semibold tracking-tight text-foreground">
            Редактировать профиль
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            Обновите контактные данные{" "}
            {initialData?.role === "GUIDE" && "и организацию"}
          </DialogDescription>
        </DialogHeader>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
        >
          <section className="space-y-4">
            <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Личные данные
            </h3>
            <div className="grid gap-10 mt-10">
              <InputField
                type="text"
                register={register("name")}
                name="name"
                error={errors}
                watch={watch}
                placeholder="Ваше имя"
                autoComplete="name"
                defaultValue={initialData?.name}
                leftIcon={<User className="size-4 text-muted-foreground" />}
              />
              <InputField
                type="tel"
                register={register("phone")}
                name="phone"
                error={errors}
                watch={watch}
                placeholder="Телефон"
                autoComplete="tel"
                defaultValue={initialData?.phone}
                leftIcon={<Phone className="size-4 text-muted-foreground" />}
              />
              <InputField
                type="email"
                register={register("email")}
                name="email"
                error={errors}
                watch={watch}
                placeholder="Почта"
                autoComplete="email"
                defaultValue={initialData?.email}
                leftIcon={<Mail className="size-4 text-muted-foreground" />}
              />
            </div>
          </section>

          <Separator />

          {initialData?.role === "GUIDE" && (
            <section className="space-y-4">
              <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Организация
              </h3>
              <div className="grid gap-4">
                <InputField
                  type="text"
                  register={register("organizationName")}
                  name="organizationName"
                  error={errors}
                  watch={watch}
                  placeholder="Название организации"
                  autoComplete="organization"
                  defaultValue={initialData?.organizationName}
                  leftIcon={
                    <Building2 className="size-4 text-muted-foreground" />
                  }
                />
                <InputField
                  type="text"
                  register={register("organizationType")}
                  name="organizationType"
                  error={errors}
                  watch={watch}
                  placeholder="Тип организации"
                  autoComplete="organization-title"
                  defaultValue={initialData?.organizationType}
                  leftIcon={
                    <Building2 className="size-4 text-muted-foreground" />
                  }
                />
              </div>
            </section>
          )}

          <div className="flex justify-end gap-3 pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={isPending}
              className="min-w-25"
            >
              Отмена
            </Button>
            <Button type="submit" disabled={isPending} className="min-w-35">
              {isPending ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Сохранение...
                </span>
              ) : (
                "Сохранить изменения"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
