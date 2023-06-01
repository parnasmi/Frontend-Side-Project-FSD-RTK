import { User } from '../../../src/entities/User';
import { USER_LOCALSTORAGE_KEY } from '../../../src/shared/const/localstorage';
import { selectByTestId } from '../../helpers/selectByTestId';

const apiHost = Cypress.env('api_server');

export const login = (username = 'testuser', password = '123') => {
    return cy.request({
        method: 'POST',
        url: `${apiHost}/login`,
        body: {
            username,
            password,
        },
    }).then(({ body }) => {
        window.localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(body));
        return body;
    });
};

export const getByTestId = (testId: string) => {
    return cy.get(selectByTestId(testId));
};

declare global {
    namespace Cypress {
      interface Chainable {
        login(username?: string, password?: string): Chainable<User>
        getByTestId(testId:string): Chainable<JQuery<HTMLElement>>
        // drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
        // dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
        // visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
      }
    }
  }
