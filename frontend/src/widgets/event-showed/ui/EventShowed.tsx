"use client";

import { EventShowedElement } from "@/entities/event";
import { FavoriteAdd } from "@/features/favorite-add";
import { FavoriteRemove } from "@/features/favorite-remove/ui/FavoriteRemove";
import { IEvent } from "@/shared/types";
import { Container } from "@/shared/ui";

interface IEventShowedProps {
  event: IEvent | undefined;
}

export const EventShowed = ({ event }: IEventShowedProps) => {
  const favorite = event?.favorites?.find((fav) => fav.eventId === event?.id);
  const isFavorite = event?.favorites?.some(fav => fav.eventId === event.id);

  return (
    <section className="py-8 md:py-12">
      <Container>
        <div className="mx-auto max-w-3xl">
          <EventShowedElement event={event}>
            { isFavorite ? (
              <FavoriteRemove favoriteId={favorite?.id || ""} />
            ) : (
              <FavoriteAdd eventId={event?.id || ""} />
            ) }
          </EventShowedElement>
        </div>
      </Container>
    </section>
  );
};
