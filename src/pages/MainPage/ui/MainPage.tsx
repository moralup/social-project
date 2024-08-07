import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/page';

const MainPage = memo(() => {
    const { t } = useTranslation();

    return <Page data-testid="MainPage">{t('Главная страница')}</Page>;
});

export default MainPage;
