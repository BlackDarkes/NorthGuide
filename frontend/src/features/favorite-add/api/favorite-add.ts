import { favoriteClient } from "@/entities/favorite/api/favorite-client";
import { queryClient } from "@/libs/query-client/queryClient";
import { useMutation } from "@tanstack/react-query";

export const useFavoriteAdd = () => {
  return useMutation({
    mutationKey: ["favorite-add"],
    mutationFn: async (eventId: string) => {
      await favoriteClient.create({ eventId });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["events"] });
      queryClient.invalidateQueries({ queryKey: ["event"] });
      queryClient.invalidateQueries({ queryKey: ["favorites"] });
    },
  });
};
