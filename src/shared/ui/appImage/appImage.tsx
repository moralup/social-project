import {
    FC,
    ImgHTMLAttributes,
    ReactElement,
    useLayoutEffect,
    useState,
} from 'react';

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
    fallback?: ReactElement;
    errorFallback?: ReactElement;
    src: string;
}

export const AppImage: FC<AppImageProps> = props => {
    const {
        //
        className,
        src,
        alt,
        fallback,
        errorFallback,
        ...otherProps
    } = props;
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useLayoutEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
            setIsLoading(false);
        };
        img.onerror = () => {
            setHasError(true);
            setIsLoading(false);
        };
    }, [src]);

    if (isLoading && fallback) {
        return fallback;
    }

    if (hasError && errorFallback) {
        return errorFallback;
    }

    return (
        <img
            src={src}
            alt={alt}
            className={className}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...otherProps}
        />
    );
};
