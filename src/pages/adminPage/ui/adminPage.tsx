import { FC, memo } from 'react';
import { Page } from '@/widgets/page';

const AdminPage: FC = () => {
    return (
        // eslint-disable-next-line i18next/no-literal-string
        <Page data-testid="AdminPage">ADMIN PAGE</Page>
    );
};

export default memo(AdminPage);
