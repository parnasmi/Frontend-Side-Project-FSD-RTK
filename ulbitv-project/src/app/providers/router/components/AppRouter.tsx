import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Routes, Route } from 'react-router-dom';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';
import { routes } from '../config/routes';

export default function AppRouter() {
    // const { t } = useTranslation();
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {Object.values(routes).map((routeProps) => (
                    <Route
                        key={routeProps.path}
                        {...routeProps}
                        element={(
                            <div className="page-wrapper">
                                {routeProps.element}
                            </div>
                        )}
                    />
                ))}
            </Routes>
        </Suspense>
    );
}
