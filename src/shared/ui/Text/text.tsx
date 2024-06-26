import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './text.module.scss';

export enum TextTheme {
    ERROR = 'error',
    PRIMARY = 'primary',
}

interface TextProps {
    children?: string;
    title?: string;
    theme?: TextTheme;
    className?: string;
}

export const Text: FC<TextProps> = memo((props: TextProps) => {
    const {
        children,
        theme = TextTheme.PRIMARY,
        className,
        title,

        ...otherProps
    } = props;

    return (
        <div
            className={classNames(cls.textWrapper, {}, [className, cls[theme]])}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...otherProps}
        >
            {title && <h3 className={cls.title}>{title}</h3>}
            {children && <span className={cls.text}>{children}</span>}
        </div>
    );
});
