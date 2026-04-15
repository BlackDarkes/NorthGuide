import { Heart } from "lucide-react";
import { useFavoriteRemove } from "../api/favorite-remove";
import { toast } from "sonner";

interface IFavoriteRemoveProps {
  favoriteId: string;
}
  
export const FavoriteRemove = ({ favoriteId }: IFavoriteRemoveProps) => {
  const { mutate: removeFavorite } = useFavoriteRemove(); 

  const handleRemoveFavorite = () => {
    removeFavorite(favoriteId);
    toast.success("Событие удалено из избранного");
  };

  return (
    <button type="button" onClick={handleRemoveFavorite}>
      <Heart className="size-7 text-red-700 " />
    </button>
  );
}