import { type infer as zInfer, object, string, number, date, enum as zEnum } from "zod";
import { createZodDto } from "nestjs-zod";
import { EnumEventsType } from "@/generated/prisma/enums";

const eventCreateSchema = object({
  userId: string().min(2, "Id пользователя не может быть пустым"),
  title: string().min(2, "Заголовок события не может быть пустым"),
  type: zEnum(EnumEventsType, "Тип события не может быть пустым"),
  days: number().int().default(1),
  countPeople: number().int().default(1),
  price: number().min(0, "Цена не может быть отрицательной"),
  dateEvent: date().min(new Date(), "Дата события не может быть в прошлом"),
  description: string().min(2, "Описание события не может быть пустым"),
});

type TypeEventCreateDto = zInfer<typeof eventCreateSchema>;

class EventCreateDto extends createZodDto(eventCreateSchema) {}

export { EventCreateDto, TypeEventCreateDto };