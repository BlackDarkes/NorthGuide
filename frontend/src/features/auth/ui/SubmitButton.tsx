import { Button } from "@/shared/ui";

interface ISubmitButtonProps {
  message: string;
}

export const SubmitButton = ({ message }: ISubmitButtonProps) => {
  return (
    <Button type="submit">{message}</Button>
  );
}