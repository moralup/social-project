import { FC } from 'react';
import { useSelector } from 'react-redux';

import { validateErrorTranslates } from '../../model/types/profileSchema';

import { Text, TextTheme } from 'shared/ui/Text';

import { getProfileValidationErrors } from '../../model/selectors/getProfileValidationErrors';

export const Errors: FC = () => {
    const validationErrors = useSelector(getProfileValidationErrors);

    if (!validationErrors?.length) {
        return null;
    }

    return (
        <div>
            {validationErrors.map(error => (
                <Text theme={TextTheme.ERROR}>
                    {validateErrorTranslates[error]}
                </Text>
            ))}
        </div>
    );
};
