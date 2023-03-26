import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducer } from 'features/AuthByUsername';
import { profileReducer } from 'entities/Profile';
import { ReducersList } from 'shared/libs/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { articleDetailsCommentsReducer } from 'pages/ArticleDetailsPage/model/slices/articleDetailsCommentsSlice';
import { addCommentFormReducer } from 'features/addCommentForm/model/slices/addCommentFormSlice';
import { articlesPageReducer } from 'pages/ArticlesPage/model/slices/articlesPageSlice';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsComments: articleDetailsCommentsReducer,
    articlesPage: articlesPageReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>,
) => (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
    </StoreProvider>
);
