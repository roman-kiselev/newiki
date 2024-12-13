import { Roles } from '@roles/enums/roles.enum';

export interface ActiveUserData {
  sub: number;

  email: string;

  role: Roles;
}
