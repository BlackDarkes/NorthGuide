import { apiClient } from "@/libs/api";
import { extractData } from "@/shared/utils/extract-data";

export const eventClient = {
  getEvents: async () => 
    extractData(apiClient.events.getEvents())
}