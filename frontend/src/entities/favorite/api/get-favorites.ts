import { useQuery } from "@tanstack/react-query"
import { favoriteClient } from "./favorite-client";
import { IFavorite } from "@/shared/types";

export const useGetAllFavorites = () => {
  return useQuery<IFavorite[]>({
    queryKey: ["favorites"],
    queryFn: async () => {
      return favoriteClient.getAll();
    }
  })
}