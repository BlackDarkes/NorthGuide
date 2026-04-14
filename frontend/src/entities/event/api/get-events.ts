import { useQuery } from "@tanstack/react-query";
import { eventClient } from "./event-client";
import { IEvent } from "@/shared/types";

export const useGetAllEvents = () => {
  return useQuery<IEvent[]>({
    queryKey: ["events"],
    queryFn: async () => {
      return eventClient.getEvents();
    },
  });
};

export const useGetEventById = (id: string) => {
  return useQuery<IEvent>({
    queryKey: ["event", id],
    queryFn: async () => {
      return eventClient.getEventById(id);
    },
  })
}