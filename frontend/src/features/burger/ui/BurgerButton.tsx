import { cn } from "@/shared/lib/utils";
import { useBurgerStore } from "../model/burger-store";

interface IBurgerButtonProps {
  className?: string;
}

export const BurgerButton = ({ className }: IBurgerButtonProps) => {
  const { isOpen, handleOpen } = useBurgerStore();

  return (
    <button
      type="button"
      onClick={handleOpen}
      className={cn(
        "relative flex items-center",
        "w-7.5 h-5",
        "transition-all duration-300 z-600",
        "before:content-[''] before:absolute before:top-0 before:left-0 before:h-0.5 before:w-full before:bg-foreground before:transition-all before:duration-300",
        "after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-foreground after:transition-all after:duration-300",
        {
          "before:rotate-45 before:translate-y-2.5": isOpen,
          "after:-rotate-45 after:-translate-y-2": isOpen,
        },
        isOpen && className
      )}
    >
      <span
        className={cn(
          "w-full h-0.5 bg-foreground transition-all duration-300",
          { "opacity-0": isOpen },
        )}
      />
    </button>
  );
};
