import { ChangeEventHandler, FC, InputHTMLAttributes, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './input.module.scss';

export enum InputTheme {
    NORMAL = 'normal',
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BOTTOM_LINE = 'bottomLine',
}

export type InputType = 'text' | 'password' | 'number' | 'email';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
    type?: InputType;
    theme?: InputTheme;
    caption?: string;
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
}

export const Input: FC<InputProps> = memo((props: InputProps) => {
    const {
        theme = InputTheme.NORMAL,
        type = 'text',
        caption,
        value,
        onChange,
        className,

        ...otherProps
    } = props;

    const onChangeHandler: ChangeEventHandler<HTMLInputElement> = e => {
        onChange?.(e.target.value);
    };

    return (
        <label className={classNames(cls.label, {}, [className])}>
            {caption && (
                <span
                    data-testid="caption"
                    className={cls.caption}
                >
                    {caption}
                </span>
            )}
            <input
                data-testid="input"
                type={type}
                value={value}
                onChange={onChangeHandler}
                className={classNames(cls.input, {}, [cls[theme]])}
                spellCheck={false}
                {...otherProps}
            />
        </label>
    );
});
