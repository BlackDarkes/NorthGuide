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
  leftIcon?: React.ReactNode;
  defaultValue?: string;
}

export const InputField = ({
  type,
  register,
  placeholder,
  error,
  name,
  watch,
  autoComplete,
  leftIcon,
  defaultValue,
}: IInputFieldProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const message = error?.[name]?.message;
  const isActive = isFocused || watch(name);

  const inputPadding = leftIcon ? "pl-9" : "pl-2.5";
  const labelLeft = leftIcon ? "left-9" : "left-2.5";

  return (
    <div className="w-full relative">
      {leftIcon && (
        <div
          className={cn(
            "absolute left-2.5 top-1/2",
            "transition-all duration-400",
            "-translate-y-1/2 text-placeholder-color pointer-events-none z-10",
          )}
        >
          {leftIcon}
        </div>
      )}

      <label
        htmlFor={name}
        className={cn(
          `absolute duration-400 transition ease-in-out cursor-text z-10 pointer-events-none`,
          labelLeft,
          "text-placeholder-color",
          {
            "text-primary-color -translate-y-[calc(100%+0.2rem)] scale-95":
              isActive,
            "translate-y-3": !isActive,
            "-translate-x-6": leftIcon && isActive || defaultValue,
            "-translate-y-[calc(100%+0.2rem)]": defaultValue
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
        defaultValue={defaultValue}
        className={cn(
          "py-3 w-full bg-transparent outline-none z-0",
          inputPadding,
          "border duration-400 transition-all",
          {
            "border-primary rounded-xl": isActive,
            "border-transparent border-b border-b-chart-3 rounded-none":
              !isActive,
            "rounded-xl border-primary ": defaultValue
          },
        )}
      />

      {typeof message === "string" && (
        <p className="text-red-500 text-sm mt-1 ml-2.5">{message}</p>
      )}
    </div>
  );
};
