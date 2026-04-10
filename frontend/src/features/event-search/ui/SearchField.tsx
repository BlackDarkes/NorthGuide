import { cn } from "@/shared/lib/utils";
import { ChangeEvent, useState } from "react";

export const SearchField = () => {
  const [value, setValue] = useState<string>("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  return (
    <div className="relative group">
      <input
        type="search"
        name="search"
        id="search"
        value={value}
        onChange={onChange}
        placeholder="Поиск..."
        className={cn(
          "w-full px-4 py-2.5 rounded-lg border border-gray-600 bg-foreground text-gray-900  placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
        )}
      />
    </div>
  );
};