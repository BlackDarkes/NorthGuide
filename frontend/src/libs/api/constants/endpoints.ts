export const ENDPOINTS = {
  auth: {
    login: "/auth/login",
    register: "/auth/register",
    logout: "/auth/logout",
    refresh: "/auth/refresh",
  },
  user: {
    me: "/user/me",
    profileUpdate: "/user",
  },
  events: {
    getAll: "/events",
    getById: "/events/:id",
    getByCurrentUser: "/events/user",
    getByTitle: "/events/title",
    create: "/events",
  },
  orders: {
    getAll: "/orders",
    getById: "/orders/:id",
    getByCurrentUser: "/orders/user",
    getByUserId: "/orders/user/:userId",
    getByEventId: "/orders/event/:eventId",
    getByCurrentUserAndEventId: "/orders/user/event/:eventId",
    getByEventIdAndUserId: "/orders/event/:eventId/user/:userId",
    search: "/orders/search",
    create: "/orders",
    remote: "/orders/:id",
  },
  favorites: {
    getAll: "/favorites",
    getById: "/favorites/:id",
    getByCurrentUserId: "/favorites/user",
    getByUserId: "/favorites/user/:userId",
    getByEventId: "/favorites/event/:eventId",
    create: "/favorites",
    remove: "/favorites/:id",
  }
};
