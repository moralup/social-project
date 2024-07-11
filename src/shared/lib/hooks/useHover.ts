import { useCallback, useMemo, useState } from 'react';

interface UseHoverFuncEventI {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}
type UseHoverResultI = [boolean, UseHoverFuncEventI];

export const useHover = () => {
    const [isHover, setIsHover] = useState(false);

    const onMouseEnter = useCallback(() => {
        setIsHover(true);
    }, []);

    const onMouseLeave = useCallback(() => {
        setIsHover(false);
    }, []);

    return useMemo<UseHoverResultI>(
        () => [
            isHover,
            {
                onMouseEnter,
                onMouseLeave,
            },
        ],
        [isHover, onMouseEnter, onMouseLeave],
    );
};
