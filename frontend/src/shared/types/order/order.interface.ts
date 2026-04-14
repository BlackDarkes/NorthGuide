export interface IOrder {
  id: string;
  userId: string;
  eventId: string;
  startDate: Date;
  endDate: Date;
  price: number;
  isCompleted: boolean;
}