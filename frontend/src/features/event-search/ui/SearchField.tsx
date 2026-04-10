import { ChangeEvent, useState } from "react";

export const SearchField = () => {
  const [value, setValue] = useState<string>("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  return (
    <input
      type="search"
      name="search"
      id="search"
      value={value}
      onChange={onChange}
      placeholder="Поиск..."
    />
  );
};
