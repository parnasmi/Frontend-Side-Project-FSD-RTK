import { useTranslation } from 'react-i18next';

export default function MainPage() {
    const { t } = useTranslation('main');

    return (
        <div data-testid="MainPage">
            {t('Главная страница', { ns: 'main' })}
        </div>
    );
}
