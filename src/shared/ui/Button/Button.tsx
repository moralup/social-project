import { ButtonHTMLAttributes, FC } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
}

<<<<<<< HEAD
export const Button: FC<ButtonProps> = (props) => {
    const { className, children, theme, ...otherProps } = props;

    return (
        <button
            type="button"
            data-testid="button"
            className={classNames(cls.Button, { [cls[theme]]: true }, [className])}
            {...otherProps}
        >
=======
export const Button: FC<ButtonProps> = props => {
    const { className, children, theme, ...otherProps } = props;

    return (
        <button type="button" className={classNames(cls.Button, { [cls[theme]]: true }, [className])} {...otherProps}>
>>>>>>> 055736284f79264b7d7c2bb32b6b62b5d11ed118
            {children}
        </button>
    );
};

