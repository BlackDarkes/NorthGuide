"use client";

import { InputField } from "@/shared/ui";
import { FormLayout } from "../../ui/layouts/FormLayout";
import { SubmitButton } from "../../ui/SubmitButton";
import { SubmitHandler, useForm } from "react-hook-form";
import { loginSchema, TypeLoginSchema } from "@/entities/user";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useUserStore } from "../../model/user-store";
import { useRouter } from "next/navigation";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<TypeLoginSchema>({
    defaultValues: { email: "", password: "" },
    resolver: zodResolver(loginSchema),
  });
  const { login } = useUserStore();
  const router = useRouter();

  const onSubmit: SubmitHandler<TypeLoginSchema> = async (data) => {
    try {
      await login(data);
      router.push("/");
      // toast
    } catch (error) {
      console.error("❌ Ошибка входа:", error);
    }
  };

  return (
    <FormLayout
      title="Вход в аккаунт"
      description="Введите данные для продолжения"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
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
          register={register("password")}
          name="password"
          watch={watch}
          placeholder="Пароль"
          type="password"
          autoComplete="current-password"
        />

        <div className="flex flex-col items-center gap-4 pt-2">
          <SubmitButton message="Войти" isLoading={isSubmitting} />
          <p className="text-sm text-muted-foreground">
            Нет аккаунта?{" "}
            <Link
              href="/register"
              className="font-medium text-primary hover:underline underline-offset-4 transition-colors"
            >
              Зарегистрироваться
            </Link>
          </p>
        </div>
      </form>
    </FormLayout>
  );
};
