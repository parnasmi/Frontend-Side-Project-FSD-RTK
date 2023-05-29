import { screen, waitForElementToBeRemoved } from '@testing-library/react';

import AppRouter from './AppRouter';

import { UserRole } from '@/entities/User';
import { getRouteAdmin, getRouteProfile } from '@/shared/const/router.const';
import { componentRender } from '@/shared/libs/tests/componentRender';

describe('AppRouter', () => {
    test('Page should be rendered', async () => {
        componentRender(<AppRouter />, {
            route: '/about',
        });

        await waitForElementToBeRemoved(screen.queryByText('Loading...')).catch((err) => console.log(err));

        const page = await screen.findByTestId('AboutPage');
        expect(page).toBeInTheDocument();
    });

    test('Page Not Found', async () => {
        componentRender(<AppRouter />, {
            route: '/asfasfasfasf',
        });

        const page = await screen.findByTestId('NotFoundPage');
        expect(page).toBeInTheDocument();
    });

    test('Redirect unauthorized user to main page', async () => {
        componentRender(<AppRouter />, {
            route: getRouteProfile('1'),
        });

        await waitForElementToBeRemoved(screen.queryByText('Loading...')).catch((err) => console.log(err));

        const page = await screen.findByTestId('MainPage');
        expect(page).toBeInTheDocument();
    });

    test('Access to closed page for authorized user', async () => {
        componentRender(<AppRouter />, {
            route: getRouteProfile('1'),
            initialState: {
                user: { _inited: true, authData: {} },
            },
        });

        await waitForElementToBeRemoved(screen.queryByText('Loading...')).catch((err) => console.log(err));

        const page = await screen.findByTestId('ProfilePage');
        expect(page).toBeInTheDocument();
    });

    test('Access denied (no role)', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAdmin(),
            initialState: {
                user: { _inited: true, authData: { } },
            },
        });

        await waitForElementToBeRemoved(screen.queryByText('Loading...')).catch((err) => console.log(err));

        const page = await screen.findByTestId('ForbiddenPage');
        expect(page).toBeInTheDocument();
    });

    test('Access allowed (role is available)', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAdmin(),
            initialState: {
                user: { _inited: true, authData: { roles: [UserRole.ADMIN] } },
            },
        });

        await waitForElementToBeRemoved(screen.queryByText('Loading...')).catch((err) => console.log(err));

        const page = await screen.findByTestId('AdminPanelPage');
        expect(page).toBeInTheDocument();
    });
});
