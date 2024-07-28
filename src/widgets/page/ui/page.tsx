import {
    FC,
    memo,
    MutableRefObject,
    ReactNode,
    UIEvent,
    useEffect,
    useRef,
} from 'react';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './page.module.scss';
import { useTypedDispatch } from '@/shared/lib/hooks/useTypedDispatch';
import { setScrollPosition } from '../model/slices/pageSlice';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getPageScrollByPath } from '../model/selectors/getPageScroll/getPageScroll';
import { StateSchema } from '@/app/providers/StoreProvider';
import { useThrottle } from '@/shared/lib/hooks/useThrottle';
import type { TestPropsI } from '@/shared/types/testing';

interface PageProps extends TestPropsI {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

export const Page: FC<PageProps> = memo((props: PageProps) => {
    const { className, children, onScrollEnd } = props;
    const wrapperRef = useRef() as MutableRefObject<HTMLElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const dispatch = useTypedDispatch();
    const { pathname } = useLocation();
    // prettier-ignore
    const scrollPosition = useSelector(
        (state: StateSchema) => getPageScrollByPath(state, pathname),
    );

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    });

    useEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    }, [scrollPosition]);

    const onScroll = useThrottle((e: UIEvent) => {
        dispatch(
            setScrollPosition({
                path: pathname,
                position: e.currentTarget.scrollTop,
            }),
        );
    }, 500);

    return (
        <section
            ref={wrapperRef}
            onScroll={onScroll}
            className={classNames(cls.page, {}, [className])}
            data-testid={props['data-testid'] || 'page'}
        >
            {children}
            {onScrollEnd && (
                <div
                    className={cls.trigger}
                    ref={triggerRef}
                />
            )}
        </section>
    );
});
