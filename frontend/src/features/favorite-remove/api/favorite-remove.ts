import { favoriteClient } from "@/entities/favorite/api/favorite-client";
import { queryClient } from "@/libs/query-client/queryClient";
import { useMutation } from "@tanstack/react-query"

export const useFavoriteRemove = () => {
  return useMutation({
    mutationKey: ["favorite-remove"],
    mutationFn: async (favoriteId: string) => {
      await favoriteClient.remove(favoriteId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["events"] });
      queryClient.invalidateQueries({ queryKey: ["event"] });
    },
  })
}