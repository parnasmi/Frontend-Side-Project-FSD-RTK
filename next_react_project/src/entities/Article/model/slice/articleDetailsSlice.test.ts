import { fetchArticleById } from '../services/fetchArticleById';
import { ArticleDetailsSchema } from '../types/articleDetailsSchema';

import { articleDetailsReducer } from './articleDetailsSlice';

import { article } from '@/shared/const/article';

describe('articleDetailslice.test', () => {
    test('test get article by id pending', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: false,
        };

        expect(
            articleDetailsReducer(
                state as ArticleDetailsSchema,
                fetchArticleById.pending,
            ),
        ).toEqual({
            isLoading: true,
        });
    });

    test('test get article by id fullfilled', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: true,
        };

        expect(
            articleDetailsReducer(
                state as ArticleDetailsSchema,
                fetchArticleById.fulfilled(article, '', ''),
            ),
        ).toEqual({
            isLoading: false,
            data: article,
        });
    });
});
