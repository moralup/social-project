export interface UserI {
    id: string;
    username: string;
    avatar?: string;
}

export interface UserSchema {
    authData?: UserI;

    _inited: boolean;
}
