import { TypeEventStatus } from "./event-status.type";
import { TypeEventType } from "./event-type.type";

export interface IEvent {
  id: string;
  userId: string;
  title: string;
  statusEvent: TypeEventStatus;
  type: TypeEventType;
  days: number;
  countPeople: number;
  price: number;
  dateEvent: Date;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}