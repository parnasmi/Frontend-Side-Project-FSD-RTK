import { Suspense, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';

import { AppRoutesProps, routes as routePaths } from '../config/routes';

import { RequireAuth } from './RequireAuth';

import { PageLoader } from '@/shared/ui/PageLoader';

export default function AppRouter() {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const element = (
            <Suspense fallback={<PageLoader />}>
                {route.element}
            </Suspense>
        );
        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.authOnly ? <RequireAuth roles={route.roles}>{element}</RequireAuth> : element}
            />
        );
    }, []);
    return (
        <Routes>
            {Object.values(routePaths).map(renderWithWrapper)}
        </Routes>
    );
}
