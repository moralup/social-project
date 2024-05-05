import { Theme, useTheme } from 'app/providers/ThemeProvider';

import { Button, ThemeButton } from 'shared/ui/Button/Button';

import { classNames } from 'shared/lib/classNames/classNames';

import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import LightIcon from 'shared/assets/icons/theme-light.svg';

import 'app/styles/index.scss';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    const ThemeIcon = theme === Theme.DARK ? DarkIcon : LightIcon;

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
        >
            <ThemeIcon />
        </Button>
    );
};

