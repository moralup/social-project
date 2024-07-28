import { FC, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './text.module.scss';

export enum TextTheme {
    ERROR = 'error',
    PRIMARY = 'primary',
    INVERTED_PRIMARY = 'inverted-primary',
}

export enum TextSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface TextProps {
    children?: string;
    title?: string;
    theme?: TextTheme;
    size?: TextSize;
    isInlineTitle?: boolean;
    className?: string;
}

export const Text: FC<TextProps> = memo((props: TextProps) => {
    const {
        children,
        theme = TextTheme.PRIMARY,
        size = TextSize.M,
        className,
        title,
        isInlineTitle,
        ...otherProps
    } = props;

    const additional = [className, cls[theme], cls[size]];
    const titleStyle = isInlineTitle ? { display: 'inline' } : {};
    return (
        <div
            className={classNames(cls.textWrapper, {}, additional)}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...otherProps}
        >
            {title && (
                <h3
                    style={titleStyle}
                    className={cls.title}
                >
                    {title}
                </h3>
            )}
            {children && <span className={cls.text}>{children}</span>}
        </div>
    );
});
