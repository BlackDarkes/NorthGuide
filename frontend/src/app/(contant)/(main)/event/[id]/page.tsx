"use client";

import { useGetEventById } from "@/entities/event";
import { EventShowed } from "@/widgets/event-showed";
import { useParams } from "next/navigation";

export default function EventPage() {
  const { id } = useParams();
  const { data: event } = useGetEventById(id as string);

  return (
    <>
      <EventShowed event={event} />
    </>
  );
}
