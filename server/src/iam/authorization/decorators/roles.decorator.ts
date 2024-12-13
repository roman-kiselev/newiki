import { SetMetadata } from '@nestjs/common';
import { Roles as RolesNames } from '@roles/enums/roles.enum';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: RolesNames[]) => SetMetadata(ROLES_KEY, roles);
