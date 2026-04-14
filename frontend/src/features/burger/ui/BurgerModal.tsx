import { NAVIGATE_ITEMS } from "@/shared/constants/navigate-items";
import { BurgerNavigateList } from "./BurgerNavigateList";
import { cn } from "@/shared/lib/utils";
import { useBurgerStore } from "../model/burger-store";
import { MouseEvent } from "react";
import { BurgerButton } from "./BurgerButton";

export const BurgerModal = () => {
  const { isOpen, handleOpen } = useBurgerStore();

  return (
    <article
      onClick={handleOpen}
      className={cn(
        "fixed top-0 left-0 w-full h-full bg-card/70 translate-all duration-300 opacity-0 pointer-events-none select-none cursor-pointer z-500",
        {
          "opacity-100 pointer-events-auto": isOpen,
        },
      )}
    >
      <section
        onClick={(e: MouseEvent) => e.stopPropagation()}
        className={cn(
          "absolute top-0 right-0 flex justify-between p-[40px_10px] w-[min(100%,380px)] h-full bg-card cursor-default"
        )}
      >
        <BurgerNavigateList items={NAVIGATE_ITEMS} handleClose={handleOpen} />
        
        <BurgerButton />
      </section>
    </article>
  );
};
