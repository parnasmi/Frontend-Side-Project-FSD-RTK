import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/libs';
import { useSelector } from 'react-redux';
import { getArticleDetailsData, getArticleDetailsIsLoading } from 'entities/Article/model/selectors/articleDetails';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const { className } = props;
    const { t } = useTranslation('article-details');
    const { id } = useParams<{ id: string }>();
    const article = useSelector(getArticleDetailsData);
    const isArticleLoading = useSelector(getArticleDetailsIsLoading);

    if (!id || (!article && !isArticleLoading)) {
        return (
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                {t('Статья не найдена', { ns: 'article-details' })}
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            <ArticleDetails id={id} />
        </div>
    );
};

export default memo(ArticleDetailsPage);
