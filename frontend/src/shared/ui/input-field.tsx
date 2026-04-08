"use client";

import { cn } from "@/shared/lib/utils";
import { HTMLInputAutoCompleteAttribute, useState } from "react";
import {
  FieldErrors,
  UseFormRegisterReturn,
  WatchValue,
} from "react-hook-form";

interface IInputFieldProps {
  type: string;
  register: UseFormRegisterReturn;
  placeholder: string;
  error: FieldErrors;
  name: string;
  watch: WatchValue<string>;
  autoComplete: HTMLInputAutoCompleteAttribute;
}

export const InputField = ({
  type,
  register,
  placeholder,
  error,
  name,
  watch,
  autoComplete,
}: IInputFieldProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const message = error?.[name]?.message;

  return (
    <div className="w-full relative">
      <label
        htmlFor={name}
        className={cn(
          `absolute text-placeholder-color duration-400 transition ease-in-out cursor-text z-10 left-2.5 pointer-events-none`,
          {
            "text-primary-color -translate-y-[calc(100%+0.2rem)] scale-95":
              isFocused || watch(name),
            "translate-y-3": !(isFocused || watch(name)),
          },
        )}
      >
        {placeholder}
      </label>
      <input
        {...register}
        type={type}
        id={name}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        autoComplete={autoComplete}
        className={cn(
          "py-3 pl-2.5 w-full bg-transparent outline-none z-0",
          "border duration-400 transition-all",
          isFocused || watch(name)
            ? "border-primary rounded-xl"
            : "border-transparent border-b border-b-chart-3  rounded-none",
        )}
      />
      {typeof message === "string" && (
        <p className="text-red-500 text-sm mt-1 ml-2.5">{message}</p>
      )}
    </div>
  );
};
