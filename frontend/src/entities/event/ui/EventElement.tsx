import { useDate } from "@/shared/hooks/use-date";
import { cn } from "@/shared/lib/utils";
import { IEvent } from "@/shared/types";
import { memo } from "react";
import { CalendarDays, Clock, Users, BadgeRussianRuble } from "lucide-react";
import Link from "next/link";

interface IEventElementProps {
  event: IEvent | undefined;
}

export const EventElement = memo(({ event }: IEventElementProps) => {
  const { day, month, dayOfWeek, time } = useDate(event?.dateEvent);

  if (!event) return null;

  const isSend = event.type === "SEND";

  return (
    <li className="w-full">
      <Link
        href={`/event/${event?.id}`}
        className={cn(
          "group flex justify-between items-center gap-4 p-5",
          "w-full rounded-xl border border-border/40 bg-card text-card-foreground shadow-accent shadow-[2px_2px_12px_1px]",
          "hover:border-border hover:bg-accent/90 transition-all duration-300",
          "md:w-[min(100%,400px)]",
        )}
      >
        <div className="flex flex-col  gap-2.5 min-w-0">
          <div className="flex items-center flex-wrap gap-2">
            <span
              className={cn(
                "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
                isSend
                  ? "bg-primary/10 text-primary"
                  : "bg-secondary text-secondary-foreground",
              )}
            >
              {isSend ? "Возьму" : "Отдам"}
            </span>
            <span className="text-sm text-muted-foreground flex items-center gap-1.5">
              <Users className="size-3.5" />
              {event.countPeople} чел.
            </span>
          </div>

          <h3
            className="text-lg font-semibold leading-tight truncate"
            title={event.title}
          >
            {event.title}
          </h3>

          <div className="text-sm text-muted-foreground flex items-center gap-5">
            <p className="flex items-center gap-1.5">
              <Clock className="size-3.5" />
              {time}
            </p>

            <p className="flex items-center gap-1.5">
              <BadgeRussianRuble className="size-3.5" />
              {event.price} ₽
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-1 shrink-0 text-center pt-1 sm:pt-0">
          <CalendarDays className="size-5 text-muted-foreground/70 mb-0.5" />
          <p className="text-xl font-bold">{day}</p>
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            {month}
          </p>
          <p className="text-[12px] text-muted-foreground/70">{dayOfWeek}</p>
        </div>
      </Link>
    </li>
  );
});

EventElement.displayName = "EventElement";
