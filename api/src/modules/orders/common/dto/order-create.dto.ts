import { type infer as zInfer, object, string, date, number } from "zod";
import { createZodDto } from "nestjs-zod";

const orderCreateSchema = object({
  eventId: string().min(2, "Id события не может быть пустым"),
  userId: string().min(2, "Id пользователя не может быть пустым"),
  startDate: date().min(new Date(), "Дата события не может быть в прошлом"),
  endDate: date().min(new Date(), "Дата события не может быть в прошлом"),
  price: number().min(0, "Цена не может быть отрицательной"),
});

type TypeOrderCreateDto = zInfer<typeof orderCreateSchema>;

class OrderCreateDto extends createZodDto(orderCreateSchema) {};

export { type TypeOrderCreateDto, OrderCreateDto };