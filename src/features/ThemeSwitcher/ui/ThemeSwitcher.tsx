import { classNames } from '@/shared/lib/classNames/classNames';
import { Theme, useTheme } from '@/entities/theme';

import { Button, ButtonTheme } from '@/shared/ui/Button';

import DarkIcon from '@/shared/assets/icons/theme-dark.svg';
import LightIcon from '@/shared/assets/icons/theme-light.svg';
import { memo } from 'react';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    const ThemeIcon = theme === Theme.DARK ? DarkIcon : LightIcon;
    return (
        <Button
            onClick={toggleTheme}
            theme={ButtonTheme.CLEAR}
            className={classNames('', {}, [className])}
        >
            <ThemeIcon />
        </Button>
    );
});
