import { memo } from 'react';

import { ArticleTextBlock } from '../../model/types/article';

import { classNames } from '@/shared/libs';
import { Text } from '@/shared/ui/Text';

import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo((props: ArticleTextBlockComponentProps) => {
    const { className, block } = props;

    return (
        <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
            {block.title && (
                <Text title={block.title} className={cls.title} />
            )}
            {block.paragraphs.map((paragraph, index) => (
                <Text key={paragraph} text={paragraph} className={cls.paragraph} />
            ))}
        </div>
    );
});
