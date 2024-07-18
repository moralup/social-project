export type UserRoleI = 'USER' | 'ADMIN' | 'MANAGER' | 'LAWYER';

export interface UserI {
    id: string;
    username: string;
    avatar?: string;
    roles?: UserRoleI[];
}

export interface UserSchema {
    authData?: UserI;

    _inited: boolean;
}
