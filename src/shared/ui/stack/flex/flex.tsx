import { FC, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './flex.module.scss';

type FlexJustify = 'start' | 'end' | 'center' | 'between';
type FlexAlign = 'start' | 'end' | 'center';
type FlexDirection = 'row' | 'column';
type FlexGap = '4' | '8' | '16' | '32';

const justifyClasses: Record<FlexJustify, string> = {
    start: cls.justifyStart,
    end: cls.justifyEnd,
    center: cls.justifyCenter,
    between: cls.justifyBetween,
};

const alignClasses: Record<FlexAlign, string> = {
    start: cls.alignStart,
    end: cls.alignEnd,
    center: cls.alignCenter,
};

const directionClasses: Record<FlexDirection, string> = {
    row: cls.directionRow,
    column: cls.directionColumn,
};

const gapClasses: Record<FlexGap, string> = {
    4: cls.gap4,
    8: cls.gap8,
    16: cls.gap16,
    32: cls.gap32,
};

export interface FlexProps {
    className?: string;
    justify?: FlexJustify;
    align?: FlexAlign;
    direction?: FlexDirection;
    gap?: FlexGap;
    max?: boolean;
    children: ReactNode;
}

export const Flex: FC<FlexProps> = props => {
    const {
        align = 'center',
        direction,
        justify = 'between',
        gap = 4,
        className,
        children,
        max,
        ...otherProps
    } = props;

    const classes = [
        className,
        alignClasses[align],
        justifyClasses[justify],
        direction && directionClasses[direction],
        gap && gapClasses[gap],
    ];

    const mods = {
        [cls.max]: max,
    };

    return (
        <div
            className={classNames(cls.flex, mods, classes)}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...otherProps}
        >
            {children}
        </div>
    );
};
