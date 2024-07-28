import { FC } from 'react';
import { NotificationI } from '@/entities/notification/model/types/notification';
import { Text, TextTheme } from '@/shared/ui/Text';
import cls from './notificationItem.module.scss';
import { AppLink } from '@/shared/ui/AppLink';

interface NotificationProps {
    item: NotificationI;
}

export const NotificationItem: FC<NotificationProps> = ({ item }) => {
    const { description, title, href } = item;

    const content = (
        <div className={cls.notificationItem}>
            <Text
                theme={TextTheme.INVERTED_PRIMARY}
                title={title}
            >
                {description}
            </Text>
        </div>
    );

    if (href) {
        return (
            <AppLink
                className={cls.link}
                target="_blank"
                to={href}
            >
                {content}
            </AppLink>
        );
    }

    return content;
};
