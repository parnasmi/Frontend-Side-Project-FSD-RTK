import { getUserAuthData } from 'entities/User';
import { Suspense, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';
import { routes as routePaths } from '../config/routes';

export default function AppRouter() {
    const isAuth = useSelector(getUserAuthData);

    const routes = useMemo(() => Object.values(routePaths).filter((route) => {
        if (route.authOnly && !isAuth) {
            return false;
        }

        return true;
    }), [isAuth]);
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {routes.map(({ element, path }) => (
                    <Route
                        key={path}
                        path={path}
                        element={(
                            <Suspense fallback={<PageLoader />}>
                                <div className="page-wrapper">
                                    {element}
                                </div>
                            </Suspense>
                        )}
                    />
                ))}
            </Routes>
        </Suspense>
    );
}
