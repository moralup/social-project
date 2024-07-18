import { ChangeEventHandler, FC, InputHTMLAttributes, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './input.module.scss';

export enum InputTheme {
    NORMAL = '',
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BOTTOM_LINE = 'bottomLine',
}

export type InputType = 'text' | 'password' | 'number' | 'email';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange'
>;

interface InputProps extends HTMLInputProps {
    type?: InputType;
    theme?: InputTheme;
    caption?: string;
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    readonly?: boolean;
    'data-testid'?: string;
}

export const Input: FC<InputProps> = memo((props: InputProps) => {
    const {
        theme = InputTheme.NORMAL,
        type = 'text',
        caption,
        value,
        onChange,
        className,
        readonly,
        'data-testid': dataTestId = '',
        ...otherProps
    } = props;

    const onChangeHandler: ChangeEventHandler<HTMLInputElement> = e => {
        onChange?.(e.target.value);
    };

    return (
        <label className={classNames(cls.label, {}, [className])}>
            {caption && (
                <span
                    data-testid={`${dataTestId}.caption`}
                    className={cls.caption}
                >
                    {caption}
                </span>
            )}
            <input
                data-testid={`${dataTestId}.input`}
                type={type}
                value={value}
                onChange={onChangeHandler}
                className={classNames(cls.input, { [cls.readonly]: readonly }, [
                    cls[theme],
                ])}
                spellCheck={false}
                readOnly={readonly}
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...otherProps}
            />
        </label>
    );
});
