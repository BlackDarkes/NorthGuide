import { apiClient } from "@/libs/api";
import { extractData } from "@/shared/utils/extract-data";

export const eventClient = {
  getEvents: async () => 
    extractData(apiClient.events.getEvents()),
  getEventById: async (id: string) => 
    extractData(apiClient.events.getEventById(id)),
  getEventsByCurrentUser: async () =>
    extractData(apiClient.events.getEventsByCurrentUser()),
  getEventsByTitle: async (title: string) =>
    extractData(apiClient.events.getEventsByTitle(title)),
  // createEvent: async (data: any) => 
  //   extractData(apiClient.events.createEvent(data)),
}