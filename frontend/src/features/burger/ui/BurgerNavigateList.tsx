import { INavigateItems } from "@/shared/constants/navigate-items";
import { BurgerNavigateListItems } from "./BurgerNavigateListItems";
import { cn } from "@/shared/lib/utils";

interface IBurgerNavigateListProps {
  items: INavigateItems[];
}
  
export const BurgerNavigateList = ({ items }: IBurgerNavigateListProps) => {
  return (
    <ul className={cn(
      "flex flex-col gap-y-6.25 w-fit"
    )}>
      {items.map((item) => (
        <BurgerNavigateListItems key={item.id} item={item} />
      ))}
    </ul>
  );
}