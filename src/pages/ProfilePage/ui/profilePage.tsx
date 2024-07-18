import { memo } from 'react';
import { EditableProfileCard } from 'features/editableProfileCard';
import { Page } from 'widgets/page';
import { useParams } from 'react-router-dom';

const ProfilePage = memo(() => {
    const { id } = useParams();
    return (
        <Page>
            <EditableProfileCard id={id} />
        </Page>
    );
});

export default ProfilePage;
