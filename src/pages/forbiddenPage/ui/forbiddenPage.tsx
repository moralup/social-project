import { FC, memo } from 'react';
import { Page } from 'widgets/page';

const ForbiddenPage: FC = () => {
    return (
        // eslint-disable-next-line i18next/no-literal-string
        <Page>ДОСТУП ЗАПЕРЩЕН</Page>
    );
};

export default memo(ForbiddenPage);
