import { apiClient } from "@/libs/api";
import { extractData } from "@/shared/utils/extract-data";
export const favoriteClient = {
  getAll: async () => 
    extractData(apiClient.favorites.getAll()),
  getById: async (id: string) =>
    extractData(apiClient.favorites.getById(id)),
  getByCurrentUserId: async () =>
    extractData(apiClient.favorites.getByCurrentUserId()),
  getByUserId: async (userId: string) => 
    extractData(apiClient.favorites.getByUserId(userId)),
  getByEventId: async (eventId: string) => 
    extractData(apiClient.favorites.getByEventId(eventId)),
  create: async (data: { eventId: string }) => 
    extractData(apiClient.favorites.create(data)),
  remove: async (id: string) => 
    extractData(apiClient.favorites.remove(id)),
}