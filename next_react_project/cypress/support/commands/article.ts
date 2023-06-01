import { Article } from '../../../src/entities/Article';

const apiHost = Cypress.env('api_server');

const defaultArticle = {
    title: 'TEST ARTICLE',
    subtitle: 'Экономика',
    img: 'https://www.mirea.ru/upload/iblock/7cf/vvp_rf2018_1.jpg',
    views: 1022,
    createdAt: '26.02.2022',
    userId: '1',
    type: ['ECONOMICS'],
    blocks: [],
};

export const createArticle = (article?: Article) => {
    return cy
        .request({
            method: 'POST',
            url: `${apiHost}/articles`,
            headers: { Authorization: 'asasf' },
            body: article ?? defaultArticle,
        })
        .then((data) => data.body);
};

export const removeArticle = (articleId: string) => {
    return cy.request({
        method: 'DELETE',
        url: `${apiHost}/articles/${articleId}`,
        headers: { Authorization: 'asasf' },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            createArticle(article?: Article): Chainable<Article>;
            removeArticle(articleId: string): Chainable<void>;
        }
    }
}
