export { getIsManager, getIsAdmin } from './model/selectors/getUserRoles';
export { getUserAuthData } from './model/selectors/getUserAuthData';
export {
    userReducer,
    setAuthData,
    initAuthData,
    logout,
} from './model/slice/userSlice';
export type { UserI, UserSchema, UserRoleI } from './model/types/user';
