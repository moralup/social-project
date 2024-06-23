import { memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/dynamicModuleLoader';

import { profileReducer } from '../model/slice/editableProfileCardSlice';
import { fetchProfileData } from '../model/services/fetchProfileData/fetchProfileData';

import { EditableProfileCard } from './profileCard/editableProfileCard';

const reducers: ReducersList = {
    profile: profileReducer,
};

export const editableProfileCardWrapper = memo(() => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <EditableProfileCard />
        </DynamicModuleLoader>
    );
});
