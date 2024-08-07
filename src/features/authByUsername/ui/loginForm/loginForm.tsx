import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useTypedDispatch } from '@/shared/lib/hooks/useTypedDispatch';

import { Input, InputTheme } from '@/shared/ui/Input';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Text, TextTheme } from '@/shared/ui/Text';

import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/dynamicModuleLoader';
import { classNames } from '@/shared/lib/classNames/classNames';

import { loginReducer, setPassword, setUsername } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';

import { getUsername } from '../../model/selectors/getUsername';
import { getPassword } from '../../model/selectors/getPassword';
import { getIsLoading } from '../../model/selectors/getIsLoading';
import { getError } from '../../model/selectors/getError';

import cls from './loginForm.module.scss';

interface LoginFormProps {
    className?: string;
    onSuccess?: () => void;
}

const initialReducers: ReducersList = { login: loginReducer };

const LoginForm: FC<LoginFormProps> = memo<LoginFormProps>(
    ({ className, onSuccess }: LoginFormProps) => {
        const { t } = useTranslation();
        const dispatch = useTypedDispatch();

        const username = useSelector(getUsername);
        const password = useSelector(getPassword);
        const isLoading = useSelector(getIsLoading);
        const error = useSelector(getError);

        const onChangeUsername = useCallback(
            (value: string) => {
                dispatch(setUsername(value));
            },
            [dispatch],
        );

        const onChangePassword = useCallback(
            (value: string) => {
                dispatch(setPassword(value));
            },
            [dispatch],
        );

        const onLoginClick = useCallback(async () => {
            const result = await dispatch(loginByUsername({ password, username }));

            if (result.meta.requestStatus === 'fulfilled') {
                onSuccess?.();
            }
        }, [dispatch, onSuccess, password, username]);

        return (
            <DynamicModuleLoader reducers={initialReducers}>
                <div className={classNames(cls.loginForm, {}, [className])}>
                    <Text title={t('Форма авторизации')} />
                    {error && (
                        <Text
                            title={t('error')}
                            theme={TextTheme.ERROR}
                            data-testid="error"
                        >
                            {t('Вы ввели неверный логин или пароль')}
                        </Text>
                    )}
                    <Input
                        type="text"
                        value={username}
                        onChange={onChangeUsername}
                        theme={InputTheme.BOTTOM_LINE}
                        caption={t('login')}
                        className={cls.input}
                        data-testid="username"
                        required
                    />
                    <Input
                        type="text"
                        value={password}
                        onChange={onChangePassword}
                        theme={InputTheme.BOTTOM_LINE}
                        caption={t('password')}
                        className={cls.input}
                        data-testid="password"
                        required
                    />
                    <Button
                        disabled={isLoading}
                        theme={ButtonTheme.CLEAR}
                        onClick={onLoginClick}
                        className={cls.loginBtn}
                        data-testid="login-btn"
                    >
                        {t('Войти')}
                    </Button>
                </div>
            </DynamicModuleLoader>
        );
    },
);

export default LoginForm;
