import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './text.module.scss';

export enum TextTheme {
    ERROR = 'error',
}

interface TextProps {
    children?: string;
    title?: string;
    theme?: TextTheme;
    className?: string;
}

export const Text: FC<TextProps> = props => {
    const { children, theme, className, title } = props;

    return (
        <div className={classNames(cls.textWrapper, {}, [className, cls[theme]])}>
            {title && <h3 className={cls.title}>{title}</h3>}
            {children && <span className={cls.text}>{children}</span>}
        </div>
    );
};
