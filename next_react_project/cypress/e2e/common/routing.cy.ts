import { selectByTestId } from '../../helpers/selectByTestId';

const host = Cypress.env('host');

describe('Routing ', () => {
    describe('A user is not authentificated', () => {
        it('Navigates to main page', () => {
            cy.visit(`${host}`);

            cy.get(selectByTestId('MainPage')).should('exist');
        });

        it('Navigating to Profile page redirects to main page', () => {
            cy.visit(`${host}/profile/1`);

            cy.get(selectByTestId('MainPage')).should('exist');
        });

        it('Navigating to page which does to exist redirects to Forbidden page', () => {
            cy.visit(`${host}/lk;kj`);

            cy.get(selectByTestId('NotFoundPage')).should('exist');
        });
    });

    describe('A user is authentificated', () => {
        beforeEach(() => {
            cy.login('admin', '123');
        });

        it('Navigating to Profile Page', () => {
            cy.visit(`${host}/profile/1`);
            cy.get(selectByTestId('ProfilePage')).should('exist');
        });

        it('Navigating to articles page', () => {
            cy.visit(`${host}/articles`);
            cy.get(selectByTestId('ArticlesPage')).should('exist');
        });
    });
});
