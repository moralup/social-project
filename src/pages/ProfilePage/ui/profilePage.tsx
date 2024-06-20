import { fetchProfileData, profileReducer } from 'entities/profile';
import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader } from 'shared/lib/components/dynamicModuleLoader';
import { useTypedDispatch } from 'shared/lib/hooks/useTypedDispatch';

const reducers = {
    profile: profileReducer,
};

const ProfilePage = memo(() => {
    const { t } = useTranslation('user');
    const dispatch = useTypedDispatch();

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);
    return (
        <DynamicModuleLoader reducers={reducers}>
            <div>{t('Страница профиля')}</div>
        </DynamicModuleLoader>
    );
});

export default ProfilePage;
