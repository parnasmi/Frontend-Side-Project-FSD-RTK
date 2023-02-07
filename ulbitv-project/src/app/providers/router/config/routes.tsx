import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { RouteProps } from 'react-router-dom'
import { AppRoutes, routesPath } from 'shared/config';

export const routes:Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: routesPath[AppRoutes.MAIN],
        element: <MainPage/>
    },
    [AppRoutes.ABOUT]: {
        path: routesPath[AppRoutes.ABOUT],
        element: <AboutPage/>
    }
}