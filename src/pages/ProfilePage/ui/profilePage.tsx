import { profileReducer } from 'entities/profile';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader } from 'shared/lib/components/dynamicModuleLoader';

const reducers = {
    profile: profileReducer,
};

const ProfilePage = memo(() => {
    const { t } = useTranslation('user');

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div>{t('Страница профиля')}</div>
        </DynamicModuleLoader>
    );
});

export default ProfilePage;
