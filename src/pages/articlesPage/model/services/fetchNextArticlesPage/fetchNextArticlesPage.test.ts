import { $api } from 'shared/api/api';
import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk';
import { fetchNextArticlesPage } from './fetchNextArticlesPage';
// import { ArticleView } from 'entities/article';
import { ArticlesPageSchema } from '../../types/articlesPageSchema';
import { setPage } from '../../slices/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
// import { ArticleSortFiled } from 'features/articlesPageFilters/model/types/articlesPageFiltersSchema';

jest.mock('../fetchArticlesList/fetchArticlesList');
jest.mock('../../slices/articlesPageSlice');

const articlePageState: ArticlesPageSchema = {
    isLoading: false,
    hasMore: true,
    page: 2,
    limit: 5,
    entities: {},
    ids: [],
    // view: ArticleView.COMPACT,
    // order: 'asc',
    // search: '',
    // sort: ArticleSortFiled.VIEWS,
    _inited: false,
};

describe('fetchNextArticlesPage', () => {
    test('isLoading is false, hasMore is true, must be called', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: articlePageState,
        });

        await thunk.callThunk(undefined, { api: $api });

        expect(thunk.dispatch).toHaveBeenCalledTimes(4);
        expect(fetchArticlesList).toHaveBeenCalled();
        expect(setPage).toHaveBeenCalledWith(3);
    });
    test('isLoading: true, fetchArticleList not be called', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: { ...articlePageState, isLoading: true },
        });

        await thunk.callThunk(undefined, { api: $api });

        expect(fetchArticlesList).not.toHaveBeenCalled();
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    });

    test('hasMore: false, fetchArticleList not be called', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: { ...articlePageState, hasMore: false },
        });

        await thunk.callThunk(undefined, { api: $api });

        expect(fetchArticlesList).not.toHaveBeenCalled();
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    });
});
