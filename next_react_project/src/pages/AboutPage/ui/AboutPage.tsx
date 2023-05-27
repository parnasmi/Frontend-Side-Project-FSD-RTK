import { useTranslation } from 'react-i18next';

import { Page } from '@/widgets/Page';

export default function AboutPage() {
    const { t } = useTranslation('about');
    return (
        <Page dataTestId="AboutPage">
            <div>{t('О сайте')}</div>
            <div>{t('Описание сайта')}</div>
        </Page>
    );
}
