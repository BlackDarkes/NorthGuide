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
        const dateKey = event.dateEvent.toString().split("T")[0];

        if (!acc[dateKey]) {
          acc[dateKey] = [];
        }
        acc[dateKey].push(event);
        return acc;
      },
      {} as Record<string, typeof sortedEvents>,
    );
  }, [sortedEvents]);

  if (events?.length === 0) {
    return (
      <Container>
        <p className={cn(
          "mt-10 text-center"
        )}>События не найдены...</p>
      </Container>
    );
  }

  return (
    <section className={cn("my-[clamp(20px,4vw,40px)]")}>
      <Container>
        {Object.entries(groupedEvents).map(([date, dateEvents]) => {
          const displayDate = formatDate(dateEvents[0].dateEvent);

          return (<div key={date} className="mb-8 last:mb-0">
            <h2 className="text-xl font-bold mb-4">{displayDate}</h2>
            <ul
              className={cn(
                "grid grid-cols-1 justify-items-start gap-10",
                "w-full",
                "md:grid-cols-2 lg:grid-cols-3",
              )}
            >
              {dateEvents.map((event) => (
                <EventElement key={event.id} event={event} />
              ))}
            </ul>
          </div>)
        })}
      </Container>
    </section>
  );
};
