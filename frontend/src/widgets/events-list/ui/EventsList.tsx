"use client";

import { EventElement, useGetEvents } from "@/entities/event";
import { cn } from "@/shared/lib/utils";
import { formatDate } from "@/shared/model/formatDate";
import { Container } from "@/shared/ui";

export const EventsList = () => {
  const { data: events } = useGetEvents();

  return (
    <section className={cn(
      "mt-10"
    )}>
      <Container>
        <ul>
          {events?.map((event) => (
            <div key={event.id}>
              <span>
                {formatDate(event.dateEvent)}
              </span>
              <EventElement event={event} />
            </div>
          ))}
        </ul>
      </Container>
    </section>
  );
};
