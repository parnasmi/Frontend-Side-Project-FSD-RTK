import { useTranslation } from 'react-i18next';

import { Counter } from '@/entities/Counter';

export default function MainPage() {
    const { t } = useTranslation('main');

    return (
        <div>
            {t('Главная страница', { ns: 'main' })}
            <Counter />
        </div>
    );
}
