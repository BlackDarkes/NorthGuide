import { TypeUserOrganization } from "./user-organization.type";
import { TypeUserRole } from "./user-role.type";

export interface IUser {
  id: string;
  email: string;
  name: string;
  role: TypeUserRole;
  socialLinks: string[];
  profileId: string;
  isVerification: boolean;
  organizationName: string;
  organizationType: TypeUserOrganization;
  createdAt: Date;
  updatedAt: Date;
}