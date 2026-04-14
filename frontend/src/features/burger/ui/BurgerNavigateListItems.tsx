import { useUserStore } from "@/features/auth/model/user-store";
import { INavigateItems } from "@/shared/constants/navigate-items";
import { cn } from "@/shared/lib/utils";
import { TextUnderline } from "@/shared/ui";
import Link from "next/link";

interface IBurgerNavigateListItemsProps {
  item: INavigateItems;
  handleClose: () => void
}
  
export const BurgerNavigateListItems = ({ item, handleClose }: IBurgerNavigateListItemsProps) => {
  const { logout } = useUserStore();

  return (
    <li>
      <Link 
        href={item?.path || ""}
        onClick={() => {
          handleClose();
          if (item?.isLogout) {
            logout();
          }
        }}
        className={cn(
          "text-[clamp(18px,4vw,20px)] h-fit w-fit"
        )}
      >
        <TextUnderline>
          {item?.title}
        </TextUnderline>
      </Link>
    </li>
  );
}