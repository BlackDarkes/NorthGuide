"use client";

import { InputField } from "@/shared/ui";
import { FormLayout } from "../../ui/layouts/FormLayout";
import { SubmitButton } from "../../ui/SubmitButton";
import { SubmitHandler, useForm } from "react-hook-form";
import { loginSchema, TypeLoginSchema } from "@/entities/user";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useUserStore } from "../../model/user-store";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<TypeLoginSchema>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });

  const { login } = useUserStore();

  const onSubmit: SubmitHandler<TypeLoginSchema> = async (data) => {
    console.log("✅ onSubmit вызван, данные:", data);

    await login(data);

    setValue("email", "");
    setValue("password", "");
  }

  return (
    <FormLayout title="Войти" description="Чтобы войти введите свои данные">
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          error={errors}
          register={register("email")}
          name="email"
          watch={watch}
          placeholder="Почта"
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
          autoComplete="new-password"
        />

        <span>Если нет аккаунта, то <Link href="/register">зарегистрируйтесь</Link></span>

        <SubmitButton message="Войти" />
      </form>
    </FormLayout>
  );
};
