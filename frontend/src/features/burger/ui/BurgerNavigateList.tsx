import { INavigateItems } from "@/shared/constants/navigate-items";
import { BurgerNavigateListItems } from "./BurgerNavigateListItems";
import { cn } from "@/shared/lib/utils";

interface IBurgerNavigateListProps {
  items: INavigateItems[];
  handleClose: () => void
}
  
export const BurgerNavigateList = ({ items, handleClose }: IBurgerNavigateListProps) => {
  return (
    <ul className={cn(
      "flex flex-col gap-y-6.25 w-fit"
    )}>
      {items.map((item) => (
        <BurgerNavigateListItems key={item.id} item={item} handleClose={handleClose} />
      ))}
    </ul>
  );
}