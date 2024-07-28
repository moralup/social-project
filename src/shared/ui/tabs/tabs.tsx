import { FC, memo, MouseEvent, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './tabs.module.scss';

export interface TabI {
    value: string;
    content: ReactNode;
}

interface TabsProps {
    className?: string;
    tabs: TabI[];
    value: string;
    onTabClick: (tab: string) => void;
}

export const Tabs: FC<TabsProps> = memo((props: TabsProps) => {
    const { className, tabs, onTabClick, value } = props;

    const onTabClickHandler = (e: MouseEvent<HTMLDivElement>) => {
        if (e.target instanceof HTMLDivElement && e.target.dataset.id) {
            onTabClick(e.target.dataset.id);
        }
    };

    return (
        <div
            onClick={onTabClickHandler}
            className={classNames(cls.tabs, {}, [className])}
        >
            {tabs.map(tab => (
                <div
                    key={tab.value}
                    data-id={tab.value}
                    className={classNames(cls.tab, {
                        [cls.active]: tab.value === value,
                    })}
                >
                    {tab.content}
                </div>
            ))}
        </div>
    );
});
