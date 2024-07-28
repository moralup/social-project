import { rtkApi } from '@/shared/api/rtkApi';
import { NotificationI } from '../model/types/notification';

const notificationApi = rtkApi.injectEndpoints({
    endpoints: build => ({
        getNotifications: build.query<NotificationI[], string | undefined>({
            query: userId => ({
                url: '/notifications',
                params: {
                    userId,
                },
            }),
        }),
    }),
});

export const useNotifications = notificationApi.useGetNotificationsQuery;
