import { CounterSchema } from 'entities/counter';
import { UserSchema } from 'entities/user';
import { loginSchema } from 'features/authByUsername';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    login: loginSchema
}
