import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useChangeArticlesPageFilters } from '../../model/hooks/useChangeArticlesPageFilters';

import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/dynamicModuleLoader';
import { initArticlesPageFilters } from '../../model/services/initArticlesPage/initArticlesPage';
import { classNames } from '@/shared/lib/classNames/classNames';

// Enums
import { ArticleView, ArticleType } from '@/entities/article';
import { ArticleSortFiled, SortOrderType } from '../../model/types/articlesPageFiltersSchema';

// Components
import { ArticleViewSelector } from '../articleViewSelector/articleViewSelector';
import { Select, type OptionI } from '@/shared/ui/select';
import { Tabs, type TabI } from '@/shared/ui/tabs';
import { Input, InputTheme } from '@/shared/ui/Input';

// Selectors
import { getArticlesPageFiltersView } from '../../model/selectors/getArticlesPageFiltersView';
import { getArticlesPageFiltersSearch } from '../../model/selectors/getArticlesPageFiltersSearch';
import { getArticlesPageFiltersOrder } from '../../model/selectors/getArticlesPageFiltersOrder';
import { getArticlesPageFiltersSort } from '../../model/selectors/getArticlesPageFiltersSort';
import { getArticlesPageFiltersType } from '../../model/selectors/getArticlesPageFiltersType';

// Action creators
import {
    setSort,
    setType,
    setView,
    setOrder,
    setSearch,
    articlesPageFiltersReducer,
} from '../../model/slices/articlesPageFiltersSlice';

import cls from './articlesPageFilters.module.scss';

interface ArticlesPageFiltersProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesPageFilters: articlesPageFiltersReducer,
};

const sortFieldOptions: OptionI<ArticleSortFiled>[] = [
    {
        label: 'дате создания',
        value: ArticleSortFiled.CREATED,
    },
    {
        label: 'заголовкам',
        value: ArticleSortFiled.TITLE,
    },
    {
        label: 'просмотрам',
        value: ArticleSortFiled.VIEWS,
    },
];

const sortOrderOptions: OptionI<SortOrderType>[] = [
    {
        label: 'возрастанию',
        value: 'asc',
    },
    {
        label: 'убыванию',
        value: 'desc',
    },
];

const typeTabs: TabI[] = [
    { content: ArticleType.IT, value: ArticleType.IT },
    { content: ArticleType.ECONOMICS, value: ArticleType.ECONOMICS },
    { content: ArticleType.SCIENCE, value: ArticleType.SCIENCE },
    { content: ArticleType.ALL, value: ArticleType.ALL },
];

export const ArticlesPageFilters: FC<ArticlesPageFiltersProps> = ({
    className,
}) => {
    const { t } = useTranslation();
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();

    const articleView = useSelector(getArticlesPageFiltersView);
    const search = useSelector(getArticlesPageFiltersSearch);
    const order = useSelector(getArticlesPageFiltersOrder);
    const sort = useSelector(getArticlesPageFiltersSort);
    const activeType = useSelector(getArticlesPageFiltersType);

    const onViewClick = useChangeArticlesPageFilters<ArticleView>(setView);
    const onChangeSort = useChangeArticlesPageFilters(setSort);
    const onChangeOrder = useChangeArticlesPageFilters(setOrder);
    const onChangeType = useChangeArticlesPageFilters(setType);
    const onInputSearch = useChangeArticlesPageFilters(setSearch, true);

    useEffect(() => {
        dispatch(initArticlesPageFilters(searchParams));
    }, [dispatch, searchParams]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div
                className={classNames(cls.articlesPageFilters, {}, [className])}
            >
                <div className={cls.sortWrapper}>
                    <Select
                        label={t('Сортировать по:')}
                        options={sortFieldOptions}
                        onChangeSelect={onChangeSort}
                        selectedOptionValue={sort}
                    />
                    <Select
                        label={t('по:')}
                        options={sortOrderOptions}
                        onChangeSelect={onChangeOrder}
                        selectedOptionValue={order}
                    />
                    <ArticleViewSelector
                        view={articleView}
                        onViewClick={onViewClick}
                    />
                </div>
                <Input
                    theme={InputTheme.OUTLINE}
                    placeholder="Search..."
                    className={cls.searchInput}
                    onChange={onInputSearch}
                    value={search}
                />
                <Tabs
                    className={cls.types}
                    onTabClick={onChangeType}
                    tabs={typeTabs}
                    value={activeType}
                />
            </div>
        </DynamicModuleLoader>
    );
};

// const fetchData = useCallback(() => {
//     dispatch(fetchArticlesList({ replace: true }));
// }, [dispatch]);

// const debounceFetchData = useDebounce(fetchData, 500);

// const onViewClick = useCallback(
//     (view: ArticleView) => {
//         dispatch(setView(view));
//         dispatch(setPage(1));
//         fetchData();
//     },
//     [dispatch, fetchData, setPage],
// );

// const onChangeSort = useCallback(
//     (value: string) => {
//         dispatch(setSort(value as ArticleSortFiled));
//         dispatch(setPage(1));
//         fetchData();
//     },
//     [dispatch, fetchData, setPage],
// );

// const onChangeOrder = useCallback(
//     (value: string) => {
//         dispatch(setOrder(value as 'asc' | 'desc'));
//         dispatch(setPage(1));
//         fetchData();
//     },
//     [dispatch, fetchData, setPage],
// );

// const onChangeType = useCallback(
//     (value: string) => {
//         dispatch(setType(value as ArticleType));
//         dispatch(setPage(1));
//         fetchData();
//     },
//     [dispatch, fetchData, setPage],
// );

// const onInputSearch = useCallback(
//     (value: string) => {
//         dispatch(setSearch(value));
//         dispatch(setPage(1));
//         debounceFetchData();
//     },
//     [debounceFetchData, dispatch, setPage],
// );
