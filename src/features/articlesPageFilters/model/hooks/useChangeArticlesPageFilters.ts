import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import type { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { fetchArticlesList, resetPage } from 'pages/articlesPage';
import { useDebounce } from 'shared/lib/hooks/useDebounce';

export const useChangeArticlesPageFilters = <ActionCreatorArguments = string>(
    actionCreator: ActionCreatorWithPayload<any, string>,
    debounce?: boolean,
) => {
    const dispatch = useDispatch();

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);

    const debounceFetchData = useDebounce(fetchData, 500);

    return useCallback(
        (view: ActionCreatorArguments) => {
            dispatch(actionCreator(view));
            dispatch(resetPage());
            if (debounce) {
                debounceFetchData();
            } else {
                fetchData();
            }
        },
        [actionCreator, debounce, debounceFetchData, dispatch, fetchData],
    );
};
