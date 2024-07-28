import { memo } from 'react';
import { EditableProfileCard } from '@/features/editableProfileCard';
import { Page } from '@/widgets/page';
import { useParams } from 'react-router-dom';

const ProfilePage = memo(() => {
    const { id } = useParams();
    console.log('location', id);
    return (
        <Page data-testid="ProfilePage">
            <EditableProfileCard id={id} />
        </Page>
    );
});

export default ProfilePage;
