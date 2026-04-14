import { type infer as zInfer, object, string } from "zod";
import { createZodDto } from "nestjs-zod";

const favoriteCreateSchema = object({
  userId: string().min(2, "Id пользователя не может быть пустым"),
  eventId: string().min(2, "Id события не может быть пустым"),
});

class FavoriteCreateDto extends createZodDto(favoriteCreateSchema) {};

type TypeFavoriteCreateDto = zInfer<typeof favoriteCreateSchema>;

export { type TypeFavoriteCreateDto, FavoriteCreateDto };