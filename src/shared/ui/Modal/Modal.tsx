import {
    FC,
    MutableRefObject,
    type ReactNode,
    useCallback,
    useEffect,
    useState,
    useRef,
} from 'react';
import { useTheme } from '@/entities/theme';

import { Portal } from '@/shared/ui/Portal';
import { Overlay } from '../overlay/overlay';

import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

const ANIMATION_DELAY = 300;

export const Modal: FC<ModalProps> = props => {
    const { children, className, isOpen, onClose } = props;
    const [isClose, setIsClose] = useState(false);
    const { theme } = useTheme();
    const timerRef = useRef() as MutableRefObject<
        ReturnType<typeof setInterval>
    >;

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClose(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClose(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                closeHandler();
            }
        },
        [closeHandler],
    );

    useEffect(() => {
        if (isOpen) window.addEventListener('keydown', onKeyDown);

        return () => {
            window.removeEventListener('keydown', onKeyDown);
            clearTimeout(timerRef.current);
        };
    }, [isOpen, onKeyDown]);

    const mods = {
        [cls.opened]: isOpen,
        [cls.closed]: isClose,
    };

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [theme])}>
                <Overlay
                    className={cls.overlay}
                    onClick={closeHandler}
                />
                <div className={classNames(cls.content, {}, [className])}>
                    {children}
                </div>
            </div>
        </Portal>
    );
};
