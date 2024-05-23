import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

// import { useTypedSelector } from 'shared/lib/store';

import { Button, ButtonTheme } from 'shared/ui/Button/Button';

import { decrement, increment } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue';

export const Counter: FC = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const { t } = useTranslation();
    // const counterValue = useTypedSelector(getCounterValue);

    const onIncrement = () => {
        dispatch(increment());
    };

    const onDecrement = () => {
        dispatch(decrement());
    };

    return (
        <div data-testid="counter">
            <h1 data-testid="title">{`${t('value')}: ${counterValue}`}</h1>
            <Button
                data-testid="btn-increment"
                onClick={onIncrement}
                theme={ButtonTheme.OUTLINE}
            >
                {t('increment')}
            </Button>
            <Button
                data-testid="btn-decrement"
                onClick={onDecrement}
                theme={ButtonTheme.OUTLINE}
            >
                {t('decrement')}
            </Button>
        </div>
    );
};
