import { Menu } from '@headlessui/react';
import { DropDownItemI } from './dropdown';
import { classNames } from '@/shared/lib/classNames/classNames';

import { Fragment } from 'react';
import { AppLink } from '../AppLink/AppLink';

import cls from './dropdown.module.scss';

interface DropDownItemProps {
    item: DropDownItemI;
}

export const DropdownItem = ({ item }: DropDownItemProps) => {
    const { content, disabled, href, onClick } = item;

    if (href) {
        return (
            <Menu.Item
                as={AppLink}
                to={href}
                disabled={disabled}
            >
                {({ active }) => (
                    <div
                        className={classNames(cls.item, {
                            [cls.active]: active,
                        })}
                    >
                        {content}
                    </div>
                )}
            </Menu.Item>
        );
    }

    return (
        <Menu.Item
            as={Fragment}
            disabled={disabled}
        >
            {({ active }) => (
                <button
                    type="button"
                    onClick={onClick}
                    className={classNames(cls.item, {
                        [cls.active]: active,
                    })}
                >
                    {content}
                </button>
            )}
        </Menu.Item>
    );
};
