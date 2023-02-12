import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Routes, Route } from 'react-router-dom';
import { routes } from '../config/routes';

export default function AppRouter() {
    const { t } = useTranslation();
    return (
        <Suspense fallback={<>{t('Loading')}</>}>
            <Routes>
                {Object.values(routes).map((routeProps) => (
                    <Route
                        key={routeProps.path}
                        {...routeProps}
                        element={(
                            <Suspense fallback={<div>Loading...</div>}>
                                <div className="page-wrapper">
                                    {routeProps.element}
                                </div>
                            </Suspense>
                        )}
                    />
                ))}
            </Routes>
        </Suspense>
    );
}
