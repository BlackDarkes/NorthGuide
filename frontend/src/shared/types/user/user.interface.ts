import { TypeUserOrganization } from "./user-organization.type";
import { TypeUserRole } from "./user-role.type";
import { TypeUserStatusVerification } from "./user-status-verification.type";

export interface IUser {
  id: string;
  email: string;
  name: string;
  phone?: string;
  role: TypeUserRole;
  socialLinks: string[];
  profileId: string;
  isVerification: boolean;
  statusVerification: TypeUserStatusVerification;
  isOrganization: boolean;
  organizationName: string;
  organizationType: TypeUserOrganization;
  createdAt: Date;
  updatedAt: Date;
}