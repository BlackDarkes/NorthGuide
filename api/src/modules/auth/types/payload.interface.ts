import { EnumUserRole } from "@/generated/prisma/enums";

export interface IPayload {
  id: string;
  email: string;
  profileId: string;
  role: EnumUserRole | null;
  iat?: number;
  exp?: number;
}