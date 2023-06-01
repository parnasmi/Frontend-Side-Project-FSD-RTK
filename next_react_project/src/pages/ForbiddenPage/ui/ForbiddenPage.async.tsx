import { lazy } from 'react';

import { lazyLoadingTimeout } from '@/shared/libs';

// export const AboutPageAsync = lazy(() => new Promise(resolve => {
//     // @ts-ignore
//     // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
//     setTimeout(() => resolve(import('./AboutPage')), 1500)
// }));

export const ForbiddenPageAsync = lazy(() =>
    lazyLoadingTimeout(import('./ForbiddenPage'), 1000),
);
