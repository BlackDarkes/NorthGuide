import { Heart } from "lucide-react";
import { useFavoriteAdd } from "../api/favorite-add";
import { toast } from "sonner";

interface IFavoriteAddProps {
  eventId: string;
}

export const FavoriteAdd = ({ eventId }: IFavoriteAddProps) => {
  const { mutate: addFavorite } = useFavoriteAdd();

  const handleAddFavorite = () => {
    addFavorite(eventId);
    toast.success("Событие добавлено в избранное");
  };

  return (
    <button type="button" onClick={handleAddFavorite}>
      <Heart className="size-7" />
    </button>
  );
};
