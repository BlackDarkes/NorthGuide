"use client";

import { TypeProfileUpdateSchema } from "@/entities/user";
import { ENDPOINTS } from "../constants/endpoints";
import { baseClient } from "./base-client";

export const apiClient = {
  auth: {
    login: (data: { email: string; password: string }) =>
      baseClient.post(ENDPOINTS.auth.login, data),

    register: (data: { email: string; name: string; password: string }) =>
      baseClient.post(ENDPOINTS.auth.register, data),

    logout: () => baseClient.post(ENDPOINTS.auth.logout),

    refresh: () => baseClient.post(ENDPOINTS.auth.refresh),
  },
  user: {
    me: () => baseClient.get(ENDPOINTS.user.me),
    profileUpdate: (data: TypeProfileUpdateSchema) =>
      baseClient.patch(ENDPOINTS.user.profileUpdate, data),
  },
  events: {
    getEvents: () => baseClient.get(ENDPOINTS.events.getAll),
    getEventById: (id: string) =>
      baseClient.get(ENDPOINTS.events.getById.replace(":id", id)),
    getEventsByCurrentUser: () =>
      baseClient.get(ENDPOINTS.events.getByCurrentUser),
    getEventsByTitle: (title: string) =>
      baseClient.get(ENDPOINTS.events.getByTitle.replace(":title", title)),
    // createEvent: (data: DATA) =>
    //   baseClient.post(ENDPOINTS.events.create, data),
  },
  orders: {
    getAll: () => baseClient.get(ENDPOINTS.orders.getAll),
    getById: (id: string) =>
      baseClient.get(ENDPOINTS.orders.getById.replace(":id", id)),
    getByCurrentUser: () => baseClient.get(ENDPOINTS.orders.getByCurrentUser),
    getByUserId: (userId: string) =>
      baseClient.get(ENDPOINTS.orders.getByUserId.replace(":userId", userId)),
    getByEventId: (eventId: string) =>
      baseClient.get(
        ENDPOINTS.orders.getByEventId.replace(":eventId", eventId),
      ),
    getByCurrentUserAndEventId: (eventId: string) =>
      baseClient.get(
        ENDPOINTS.orders.getByCurrentUserAndEventId.replace(
          ":eventId",
          eventId,
        ),
      ),
    getByEventIdAndUserId: (eventId: string, userId: string) =>
      baseClient.get(
        ENDPOINTS.orders.getByEventIdAndUserId
          .replace(":eventId", eventId)
          .replace(":userId", userId),
      ),
    // search: (data: any) => baseClient.post(ENDPOINTS.orders.search, data),
    // create: (data: any) => baseClient.post(ENDPOINTS.orders.create, data),
    remote: (id: string) =>
      baseClient.delete(ENDPOINTS.orders.remote.replace(":id", id)),
  },
  favorites: {
    getAll: () => baseClient.get(ENDPOINTS.favorites.getAll),
    getById: (id: string) =>
      baseClient.get(ENDPOINTS.favorites.getById.replace(":id", id)),
    getByCurrentUserId: () =>
      baseClient.get(ENDPOINTS.favorites.getByCurrentUserId),
    getByUserId: (userId: string) =>
      baseClient.get(
        ENDPOINTS.favorites.getByUserId.replace(":userId", userId),
      ),
    getByEventId: (eventId: string) =>
      baseClient.get(
        ENDPOINTS.favorites.getByEventId.replace(":eventId", eventId),
      ),
    create: (data: { eventId: string }) =>
      baseClient.post(ENDPOINTS.favorites.create, data),
    remove: (id: string) =>
      baseClient.delete(ENDPOINTS.favorites.remove.replace(":id", id)),
  },
};
