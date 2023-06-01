// template-folder-name -> ArticleInfiniteList.tsx
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { getArticles } from '../../model/slices/articlesPageSlice';

import { ArticleList } from '@/entities/Article';
import { useAppDispatch } from '@/shared/libs/hooks/useAppDispatch';
import { useInitialEffect } from '@/shared/libs/hooks/useInitialEffect';
import { Text } from '@/shared/ui/Text';

interface ArticleInfiniteListProps {
    className?: string;
}

export const ArticleInfiniteList = (props: ArticleInfiniteListProps) => {
    const { className = '' } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);
    const error = useSelector(getArticlesPageError);
    const [searchParams] = useSearchParams();

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    if (error) {
        return <Text text={t('Ошибка при загрузке статей')} />;
    }
    return (
        <ArticleList
            isLoading={isLoading}
            view={view}
            articles={articles}
            className={className}
        />
    );
};
