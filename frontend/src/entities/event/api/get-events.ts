import { useQuery } from "@tanstack/react-query";
import { eventClient } from "./event-client";
import { IEvent } from "@/shared/types";

export const useGetEvents = () => {
  return useQuery<IEvent[]>({
    queryKey: ["events"],
    queryFn: async () => {
      return eventClient.getEvents();
    },
  });
};
