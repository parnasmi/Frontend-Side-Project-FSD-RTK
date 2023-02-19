import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { RouteProps } from 'react-router-dom';

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'not_found'
}

export const routesPath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    // Should be last one
    [AppRoutes.NOT_FOUND]: '*',
};

export const routes:Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: routesPath[AppRoutes.MAIN],
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: routesPath[AppRoutes.ABOUT],
        element: <AboutPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: routesPath[AppRoutes.NOT_FOUND],
        element: <NotFoundPage />,
    },
};

/*
Правильно ли я понимаю, что созданные в уроке структуры данных нужны для
 того, чтобы при добавлении нового значения в AppRoutes, ts заставлял описывать и другие структуры?
https://fs05.gcfiles.net/fileservice/file/thumbnail/h/b1fd948eab711bff775aaac42bc5c302.png/s/lx/a/550990/sc/370

То есть, почему не так:
// export const routes:Array<RouteProps> = [
//     {
//         path: routesPath[AppRoutes.MAIN],
//         element: <MainPage/>
//     },
//     {
//         path: routesPath[AppRoutes.ABOUT],
//         element: <AboutPage/>
//     }
// ];
*/
