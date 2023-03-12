import { useTranslation } from 'react-i18next';

export default function MainPage() {
    const { t } = useTranslation();

    return (
        <div>
            {t('Главная страница')}
        </div>
    );
}
