import { cn } from "@/shared/lib/utils";
import { IEvent } from "@/shared/types";
import { memo } from "react";

interface IEventElementProps {
  event: IEvent | undefined;
}
  
export const EventElement = memo(({ event }: IEventElementProps) => {
  return (
    <li className={cn(
      "flex p-5 bg-foreground text-background w-fit rounded-2xl"
    )}>
      <div>
        <h3>{event?.title}</h3>
        <p>{event?.days}</p>
        <p>{event?.price}</p>
      </div>

      <div>
        <p>{event?.countPeople}</p>
        <p>{event?.statusEvent}</p>
      </div>
    </li>
  );
})

EventElement.displayName = "EventElement";