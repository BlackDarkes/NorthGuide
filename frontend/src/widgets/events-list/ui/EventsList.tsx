import { useGetEvents } from "@/entities/event";

export const EventsList = () => {
  const { data: events } = useGetEvents();

  return (
    <ul>
      
    </ul>
  );
}