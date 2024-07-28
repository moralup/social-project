/* eslint-disable i18next/no-literal-string */
import { FC, ReactNode } from 'react';
import { Popover } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './popup.module.scss';

type MenuSide =
    | { left: boolean; right?: never }
    | { right: boolean; left?: never };

export type PopupProps = {
    className?: string;
    trigger: ReactNode;
    children: ReactNode;
} & MenuSide;

export const Popup: FC<Partial<PopupProps>> = props => {
    const { className, children, trigger, left, right } = props;

    const menuMods = {
        [cls.panelOnLeft]: left,
        [cls.panelOnRight]: right,
    };

    return (
        <Popover className={classNames(cls.popup, {}, [className])}>
            <Popover.Button className={cls.triggerBtn}>{trigger}</Popover.Button>

            <Popover.Panel className={classNames(cls.panel, menuMods)}>
                {children}
            </Popover.Panel>
        </Popover>
    );
};
