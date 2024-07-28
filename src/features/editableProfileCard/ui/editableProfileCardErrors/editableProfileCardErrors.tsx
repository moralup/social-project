import { FC } from 'react';
import { useSelector } from 'react-redux';

import { validateErrorTranslates } from '../../model/consts/consts';

import { Text, TextTheme } from '@/shared/ui/Text';

import { getProfileValidationErrors } from '../../model/selectors/getProfileValidationErrors';

export const EditableProfileCardErrors: FC = () => {
    const validationErrors = useSelector(getProfileValidationErrors);

    if (!validationErrors?.length) {
        return null;
    }

    return (
        <div>
            {validationErrors.map(error => (
                <Text
                    key={error}
                    data-testid={`EditableProfileCardError.${error}`}
                    theme={TextTheme.ERROR}
                >
                    {validateErrorTranslates[error]}
                </Text>
            ))}
        </div>
    );
};
