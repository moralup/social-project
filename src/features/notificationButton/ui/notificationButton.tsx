import { FC, useState } from 'react';
import { Popup } from '@/shared/ui/popup';
import { NotificationList } from '@/entities/notification';
import NotificationIcon from '@/shared/assets/icons/notification-icon.svg';
import cls from './notificationButton.module.scss';
import { Drawer } from '@/shared/ui/drawer';
import { BrowserView, MobileView } from 'react-device-detect';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton: FC<NotificationButtonProps> = props => {
    const { className } = props;
    const [isOpen, setIsOpen] = useState(false);

    const trigger = (
        <NotificationIcon
            onClick={() => setIsOpen(true)}
            className={cls.svg}
        />
    );

    return (
        <>
            <MobileView>
                {trigger}
                <Drawer
                    onClose={() => setIsOpen(false)}
                    isOpen={isOpen}
                >
                    <NotificationList />
                </Drawer>
            </MobileView>
            <BrowserView>
                <Popup
                    className={className}
                    left
                    trigger={trigger}
                >
                    <NotificationList className={cls.notifications} />
                </Popup>
            </BrowserView>
        </>
    );
};
