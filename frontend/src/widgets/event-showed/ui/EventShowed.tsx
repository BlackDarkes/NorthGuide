"use client";

import { EventShowedElement } from "@/entities/event";
import { IEvent } from "@/shared/types";
import { Container } from "@/shared/ui";

interface IEventShowedProps {
  event: IEvent | undefined;
}

export const EventShowed = ({ event }: IEventShowedProps) => {
  return (
    <section className="py-8 md:py-12">
      <Container>
        <div className="mx-auto max-w-3xl">
          <EventShowedElement event={event} />
        </div>
      </Container>
    </section>
  );
};