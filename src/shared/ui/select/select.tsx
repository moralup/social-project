import { ChangeEventHandler, FC, memo } from 'react';
import cls from './select.module.scss';

export interface OptionI {
    label: string;
    value: string;
}

export interface SelectProps {
    className?: string;
    label?: string;
    onChangeSelect: (value: string) => void;
    options: OptionI[];
    selectedOptionValue: string;
}

export const Select: FC<SelectProps> = memo((props: SelectProps) => {
    const {
        //
        className,
        label,
        options,
        onChangeSelect,
        selectedOptionValue,
    } = props;

    const onChangeSelectHandler: ChangeEventHandler<HTMLSelectElement> = e => {
        const { options, selectedIndex } = e.target;
        const { value } = options[selectedIndex];

        if (value) {
            onChangeSelect(value);
        }
    };

    return (
        <div className={className}>
            <label
                htmlFor={label}
                className={cls.label}
            >
                {label}
            </label>
            <select
                id={label}
                name={label}
                className={cls.select}
                onChange={onChangeSelectHandler}
            >
                {options.map(({ label, value }) => (
                    <option
                        key={value}
                        value={value}
                        className={cls.option}
                        selected={value === selectedOptionValue}
                    >
                        {label}
                    </option>
                ))}
            </select>
        </div>
    );
});
