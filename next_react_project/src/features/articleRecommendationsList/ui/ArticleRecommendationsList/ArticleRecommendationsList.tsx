import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';

import { ArticleList } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { TextSize, Text } from '@/shared/ui/Text';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo(
    (props: ArticleRecommendationsListProps) => {
        const { className } = props;
        const { t } = useTranslation();

        const {
            isLoading,
            data: articles,
            error,
        } = useArticleRecommendationsList(3);

        if (error) {
            return null;
        }

        return (
            <VStack
                data-testid="ArticleRecommendationsList"
                gap="8"
                className={classNames('', {}, [className])}
            >
                <Text size={TextSize.L} title={t('Рекомендуем')} />
                <ArticleList
                    articles={articles ?? []}
                    isLoading={isLoading}
                    // className={cls.recommendations}
                    target="_blank"
                />
            </VStack>
        );
    },
);
