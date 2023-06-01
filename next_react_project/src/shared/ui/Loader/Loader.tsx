import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/libs';

import './Loader.scss';

interface LoaderProps {
    className?: string;
}

export const Loader = ({ className }: LoaderProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames('lds-ellipsis', {}, [className])}>
            <span data-testid="loader" style={{ display: 'none' }}>
                {t('loadingSpinner')}
            </span>
            <div />
            <div />
            <div />
            <div />
        </div>
    );
};
