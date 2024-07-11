import { memo } from 'react';
import { EditableProfileCard } from 'features/editableProfileCard';
import { Page } from 'widgets/page';

const ProfilePage = memo(() => {
    return (
        <Page>
            <EditableProfileCard />
        </Page>
    );
});

export default ProfilePage;
