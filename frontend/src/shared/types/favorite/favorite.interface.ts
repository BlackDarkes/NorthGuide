import { IEvent } from "../event/event.interface";
import { IUser } from "../user/user.interface";

export interface IFavorite {
  id: string;
  userId: string;
  eventId: string;
  createdAt: Date;
  user: IUser;
  event: IEvent;
}