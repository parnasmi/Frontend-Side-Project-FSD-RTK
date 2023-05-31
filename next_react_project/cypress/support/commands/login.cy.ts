import { USER_LOCALSTORAGE_KEY } from '../../../src/shared/const/localstorage';

const apiHost = Cypress.env('api_server');
export const login = (username = 'testuser', password = '123') => {
    cy.request({
        method: 'POST',
        url: `${apiHost}/login`,
        body: {
            username,
            password,
        },
    }).then(({ body }) => {
        window.localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(body));

        cy.visit('/');
    });
};
