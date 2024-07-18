import { Menu } from '@headlessui/react';
import cls from './dropdown.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { ReactNode } from 'react';
import { DropdownItem } from './dropdownItem';

type DropDownItemAction =
    | { href: string; onClick?: never }
    | { onClick: () => void; href?: never };

export type DropDownItemI = {
    id: string;
    content: ReactNode;
    disabled?: boolean;
} & DropDownItemAction;

type MenuSide =
    | { left: boolean; right?: never }
    | { right: boolean; left?: never };

export type DropDownProps = {
    className?: string;
    items: DropDownItemI[];
    trigger: ReactNode;
} & MenuSide;

export const Dropdown = (props: DropDownProps) => {
    const {
        //
        className,
        items,
        trigger,
        left,
        right,
    } = props;

    const menuMods = {
        [cls.menuOnLeft]: left,
        [cls.menuOnRight]: right,
    };

    return (
        <Menu
            as="div"
            className={classNames(cls.dropdown, {}, [className])}
        >
            <Menu.Button className={cls.btn}>{trigger}</Menu.Button>
            <Menu.Items className={classNames(cls.menu, menuMods)}>
                {items.map(item => (
                    <DropdownItem
                        item={item}
                        key={item.id}
                    />
                ))}
            </Menu.Items>
        </Menu>
    );
};
