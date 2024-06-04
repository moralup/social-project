import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input, InputTheme } from 'shared/ui/Input/input';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './loginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
    const { t } = useTranslation();

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    return (
        <div className={classNames(cls.loginForm, {}, [className])}>
            <Input
                type="text"
                value={username}
                onChange={value => setUsername(value)}
                theme={InputTheme.BOTTOM_LINE}
                caption={t('login')}
                className={cls.input}
                data-testid="login"
                required
            />
            <Input
                type="text"
                value={password}
                onChange={value => setPassword(value)}
                theme={InputTheme.BOTTOM_LINE}
                caption={t('password')}
                className={cls.input}
                data-testid="password"
                required
            />
            <Button
                theme={ButtonTheme.CLEAR}
                className={cls.loginBtn}
            >
                {t('Войти')}
            </Button>
        </div>
    );
};
