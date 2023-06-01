let currentArticleId = '';

describe('A user enters article details page', () => {
    beforeEach(() => {
        cy.login();
        cy.createArticle().then((article) => {
            currentArticleId = article.id;
            cy.visit(`/articles/${article.id}`);
        });
    });

    afterEach(() => {
        cy.log('currentArticleId', currentArticleId);
        cy.removeArticle(currentArticleId);
    });

    it('should render article content', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist');
    });

    it('should render ArticleRecommendationsList', () => {
        cy.getByTestId('ArticleRecommendationsList').should('exist');
    });

    it('should be able to send comment', () => {
        cy.getByTestId('ArticleDetails.Info');
        cy.getByTestId('AddCommentForm').scrollIntoView();
        cy.addComment('hello');
        cy.getByTestId('CommentCard.Content').should('have.length', 1);
    });

    it('shoudl be able to add rating', () => {
        cy.getByTestId('ArticleDetails.Info');
        cy.getByTestId('RatingCard').scrollIntoView();
        cy.setRate(4, 'some comment');
        cy.get('[data-selected=true]').should('have.length', 4);
    });

    it('should be able to add rating using stubs(fixtures)', () => {
        cy.intercept('GET', '**/articles/*', {
            fixture: 'article-details.json',
        });
        cy.getByTestId('ArticleDetails.Info');
        cy.getByTestId('RatingCard').scrollIntoView();
        cy.setRate(4, 'some comment');
        cy.get('[data-selected=true]').should('have.length', 4);
    });
});
