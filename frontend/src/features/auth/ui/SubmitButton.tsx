import { Button } from "@/shared/ui";
import { Loader2 } from "lucide-react"; // Стандартная иконка в shadcn

interface ISubmitButtonProps {
  message: string;
  isLoading?: boolean;
}

export const SubmitButton = ({ message, isLoading = false }: ISubmitButtonProps) => {
  return (
    <Button type="submit" className="w-full font-medium transition-all duration-300 hover:bg-primary/85" disabled={isLoading}>
      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {message}
    </Button>
  );
};