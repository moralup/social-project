import {
    FC,
    MouseEvent,
    MutableRefObject,
    ReactNode,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';
import { Portal } from 'shared/ui/Portal';
import { classNames, type Mods } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
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
    const timerRef = useRef() as MutableRefObject<ReturnType<typeof setInterval>>;

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

    const onContentClick = (e: MouseEvent<HTMLElement>): void => {
        e.stopPropagation();
    };

    useEffect(() => {
        if (isOpen) window.addEventListener('keydown', onKeyDown);

        return () => {
            window.removeEventListener('keydown', onKeyDown);
            clearTimeout(timerRef.current);
        };
    }, [isOpen, onKeyDown]);

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.closed]: isClose,
    };

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [theme])}>
                <div
                    className={cls.overlay}
                    onClick={closeHandler}
                >
                    <div
                        className={classNames(cls.content, {}, [className])}
                        onClick={onContentClick}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
