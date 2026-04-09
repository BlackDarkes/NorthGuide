"use client";

import { InputField } from "@/shared/ui";
import { FormLayout } from "../../ui/layouts/FormLayout";
import { SubmitButton } from "../../ui/SubmitButton";
import { SubmitHandler, useForm } from "react-hook-form";
import { registerSchema, TypeRegisterSchema } from "@/entities/user";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useUserStore } from "../../model/user-store";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { X } from "lucide-react";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<TypeRegisterSchema>({
    defaultValues: { email: "", name: "", password: "" },
    resolver: zodResolver(registerSchema),
  });
  const { register: registration } = useUserStore();
  const router = useRouter();

  const onSubmit: SubmitHandler<TypeRegisterSchema> = async (data) => {
    try {
      registration(data);
      router.push("/login");
      toast.success("Вы успешно создали аккаунт", {
        position: "bottom-right",
        duration: 4000,
        action: {
          label: (
            <>
              <X size={15} />
            </>
          ),
          onClick: () => toast.dismiss(),
        },
      });
    } catch {
      toast.error("Не удалось зарегистрироваться", {
        position: "bottom-right",
        duration: 4000,
        action: {
          label: (
            <>
              <X size={15} />
            </>
          ),
          onClick: () => toast.dismiss(),
        },
      });
    }
  };

  return (
    <FormLayout
      title="Регистрация"
      description="Пожалуйста, введите свои данные для регистрации"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
        <div className="space-y-12">
          <InputField
            error={errors}
            register={register("email")}
            name="email"
            watch={watch}
            placeholder="Электронная почта"
            type="email"
            autoComplete="email"
          />

          <InputField
            error={errors}
            register={register("name")}
            name="name"
            watch={watch}
            placeholder="Имя пользователя"
            type="text"
            autoComplete="name"
          />

          <InputField
            error={errors}
            register={register("password")}
            name="password"
            watch={watch}
            placeholder="Пароль"
            type="password"
            autoComplete="current-password"
          />
        </div>

        <div className="flex flex-col items-center gap-4 pt-2">
          <SubmitButton message="Зарегистрироваться" isLoading={isSubmitting} />
          <p className="text-sm text-muted-foreground">
            Уже есть аккаунт?{" "}
            <Link
              href="/login"
              className="font-medium text-primary hover:underline underline-offset-4 transition-colors"
            >
              Войти
            </Link>
          </p>
        </div>
      </form>
    </FormLayout>
  );
};
