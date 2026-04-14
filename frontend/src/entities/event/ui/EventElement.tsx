import { useDate } from "@/shared/hooks/use-date";
import { cn } from "@/shared/lib/utils";
import { IEvent } from "@/shared/types";
import { memo } from "react";

interface IEventElementProps {
  event: IEvent | undefined;
}
  
export const EventElement = memo(({ event }: IEventElementProps) => {
  const { day, month, dayOfWeek, time } = useDate(event?.dateEvent);

  return (
    <li className={cn(
      "flex p-5 w-full bg-foreground text-background rounded-[10px]",
      "md:w-[min(100%,400px)]"
    )}>
      <div>
        { event?.type === "SEND" ? (
          <h3>Возьму: {event?.countPeople} человек</h3>
        ): (
          <h3>Отдам: {event?.countPeople} человек</h3>
        ) }
        <p>{event?.title}</p>
        <p>{time}</p>
      </div>

      <div>
        <p>{month}</p>
        <p>{day}</p>
        <p>{dayOfWeek}</p>
      </div>
    </li>
  );
})

EventElement.displayName = "EventElement";