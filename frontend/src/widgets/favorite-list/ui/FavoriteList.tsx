"use client";

import { EventElement } from "@/entities/event";
import { useGetAllFavorites } from "@/entities/favorite";
import { cn } from "@/shared/lib/utils";
import { getEventsWord } from "@/shared/model/getEventsWord";
import { Container } from "@/shared/ui";
import { Heart, Loader2 } from "lucide-react";

export const FavoriteList = () => {
  const { data: favorites, isLoading } = useGetAllFavorites();

  if (isLoading) {
    return (
      <section className="py-8 md:py-12">
        <Container>
          <div className="flex flex-col items-center justify-center gap-3 py-16 text-muted-foreground">
            <Loader2 className="size-8 animate-spin" />
            <p className="text-sm">Загрузка избранного...</p>
          </div>
        </Container>
      </section> // Skeleton
    );
  }

  if (!favorites?.length) {
    return (
      <section className="py-8 md:py-12">
        <Container>
          <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
            <div className="size-16 rounded-full bg-muted/50 flex items-center justify-center">
              <Heart className="size-8 text-muted-foreground/60" />
            </div>
            <h2 className="text-xl font-semibold text-foreground">В избранном пока пусто</h2>
            <p className="text-sm text-muted-foreground max-w-md">
              Добавляйте понравившиеся события, чтобы быстро находить их позже
            </p>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="py-8 md:py-12">
      <Container>
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight flex items-center gap-3">
            <Heart className="size-7 text-primary" />
            Избранное
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            {favorites.length} {getEventsWord(favorites.length)}
          </p>
        </div>
        <ul
          className={cn(
            "grid grid-cols-1 justify-items-start gap-6",
            "w-full",
            "md:grid-cols-2 lg:grid-cols-3",
          )}
        >
          {favorites.map((favorite) => (
            <EventElement key={favorite.id} event={favorite.event} />
          ))}
        </ul>
      </Container>
    </section>
  );
};
