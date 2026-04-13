"use client";

import { EventElement, useGetEvents } from "@/entities/event";
import { cn } from "@/shared/lib/utils";
import { formatDate } from "@/shared/model/formatDate";
import { Container } from "@/shared/ui";
import { useMemo } from "react";

export const EventsList = () => {
  const { data: events } = useGetEvents();

  const sortedEvents = useMemo(() => {
    return events
      ? [...events].sort(
          (a, b) =>
            new Date(a.dateEvent).getTime() - new Date(b.dateEvent).getTime(),
        )
      : [];
  }, [events]);

  const groupedEvents = useMemo(() => {
    return sortedEvents.reduce(
      (acc, event) => {
        const dateKey = formatDate(event.dateEvent);
        if (!acc[dateKey]) {
          acc[dateKey] = [];
        }
        acc[dateKey].push(event);
        return acc;
      },
      {} as Record<string, typeof sortedEvents>,
    );
  }, [sortedEvents]);

  return (
    <section className={cn("mt-10")}>
      <Container>
        {Object.entries(groupedEvents).map(([date, dateEvents]) => (
          <div key={date} className="mb-8 last:mb-0">
            <h2 className="text-xl font-bold mb-4">{date}</h2>
            <ul className="space-y-4">
              {dateEvents.map((event) => (
                <EventElement key={event.id} event={event} />
              ))}
            </ul>
          </div>
        ))}
      </Container>
    </section>
  );
};
