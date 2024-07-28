import { UserI } from '@/entities/user';

export interface CommentI {
    id: string;
    text: string;
    user: UserI;
}
