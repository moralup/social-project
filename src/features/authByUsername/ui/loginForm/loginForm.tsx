import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { Input, InputTheme } from 'shared/ui/Input/input';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text, TextTheme } from 'shared/ui/Text';

import { classNames } from 'shared/lib/classNames/classNames';

import { getLogin } from '../../model/selectors/getLogin';
import { setPassword, setUsername } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';

import cls from './loginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { username, password, isLoading, error } = useSelector(getLogin);

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

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ password, username }));
    }, [dispatch, password, username]);

    return (
        <div className={classNames(cls.loginForm, {}, [className])}>
            <Text title={t('Форма авторизации')} />
            {error && (
                <Text
                    title={t('error')}
                    theme={TextTheme.ERROR}
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
                data-testid="login"
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
            >
                {t('Войти')}
            </Button>
        </div>
    );
};
