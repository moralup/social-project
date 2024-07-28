import React, { ReactNode, useCallback, useEffect } from 'react';
import { Portal } from '../Portal';
import { Overlay } from '../overlay/overlay';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './drawer.module.scss';
import {
    AnimationProvider,
    useAnimationLibs,
} from '@/shared/lib/components/animationProvider';

interface DrawerProps {
    className?: string;
    children: ReactNode;
    isOpen?: boolean;
    onClose: () => void;
}

const height = window.innerHeight - 100;

const DrawerContent = (props: DrawerProps) => {
    const { Gesture, Spring } = useAnimationLibs();
    const { useDrag } = Gesture;
    const { a, useSpring, config } = Spring;

    const [{ y }, api] = useSpring(() => ({ y: height }));
    const { className, children, onClose, isOpen } = props;

    const mods = {
        [cls.opened]: isOpen,
    };

    const openDrawer = useCallback(() => {
        api.start({ y: 0, immediate: false });
    }, [api]);

    useEffect(() => {
        if (isOpen) {
            openDrawer();
        }
    }, [isOpen, openDrawer]);

    const close = (velocity = 0) => {
        api.start({
            y: height,
            immediate: false,
            config: { ...config.stiff, velocity },
            onResolve: onClose,
        });
    };

    const bind = useDrag(
        ({
            last,
            velocity: [, vy],
            direction: [, dy],
            movement: [, my],
            cancel,
        }) => {
            if (my < -70) cancel();

            if (last) {
                if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
                    close();
                } else {
                    openDrawer();
                }
            } else {
                api.start({ y: my, immediate: true });
            }
        },
        {
            from: () => [0, y.get()],
            filterTaps: true,
            bounds: { top: 0 },
            rubberband: true,
        },
    );

    if (!isOpen) {
        return null;
    }

    const display = y.to(py => (py < height ? 'block' : 'none'));

    return (
        <Portal>
            <div className={classNames(cls.drawer, mods, [className])}>
                <Overlay onClick={onClose} />
                <a.div
                    className={cls.sheet}
                    style={{
                        display,
                        bottom: `calc(-100vh + ${height - 100}px)`,
                        y,
                    }}
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...bind()}
                >
                    {children}
                </a.div>
            </div>
        </Portal>
    );
};

const DrawerAsync = (props: DrawerProps) => {
    const { isLoaded } = useAnimationLibs();

    if (!isLoaded) {
        return null;
    }

    // eslint-disable-next-line react/jsx-props-no-spreading
    return <DrawerContent {...props} />;
};

export const Drawer = (props: DrawerProps) => {
    return (
        <AnimationProvider>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <DrawerAsync {...props} />
        </AnimationProvider>
    );
};
