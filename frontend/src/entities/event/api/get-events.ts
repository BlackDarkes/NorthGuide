import { useQuery } from "@tanstack/react-query"
import { eventClient } from "./event-client"

export const useGetEvents = () => {
  return useQuery({
    queryKey: ['events'],
    queryFn: async () => {
      return eventClient.getEvents()
    }
  })
}