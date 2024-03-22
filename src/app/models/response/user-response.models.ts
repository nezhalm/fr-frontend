import {Role} from "../../enums/role.enums";
import {IdentityDocumentType} from "../../enums/identity-document-type.enums";

export interface UserResponse {
  id: number;
  username: string;
  email: string;
  role: Role;
  firstName: string;
  lastName: string;
  phone: string;
  enabled: boolean;
  profile: string;
}
