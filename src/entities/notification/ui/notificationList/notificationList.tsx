import { FC } from 'react';
import { useNotifications } from '@/entities/notification/api/notificationApi';
import { Vstack } from '@/shared/ui/stack';
import { NotificationItem } from '../notificationItem/notificationItem';
import { getUserAuthData } from '@/entities/user';
import { useSelector } from 'react-redux';
import { Skeleton } from '@/shared/ui/skeleton';

interface NotificationProps {
    className?: string;
}

export const NotificationList: FC<NotificationProps> = ({ className }) => {
    const userData = useSelector(getUserAuthData);
    const {
        data: notifications,
        isLoading,
        isError,
    } = useNotifications(userData?.id, {
        pollingInterval: 10000,
    });

    if (isError) {
        return null;
    }

    if (isLoading) {
        return (
            <Vstack gap="32" className={className}>
                {[1, 2, 3].map(i => (
                    <Vstack key={i} gap="4">
                        <Skeleton inverted height={32} width={250} />
                        <Skeleton inverted height={18} width={150} />
                    </Vstack>
                ))}
            </Vstack>
        );
    }

    return (
        <Vstack gap="32" className={className}>
            {notifications?.map(item => (
                <NotificationItem key={item.id} item={item} />
            ))}
        </Vstack>
    );
};
