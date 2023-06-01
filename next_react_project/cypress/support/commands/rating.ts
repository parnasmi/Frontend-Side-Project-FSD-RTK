export const setRate = (ratingNumber: number, feedback: string) => {
    cy.getByTestId(`StarRating.${ratingNumber}`).click();
    cy.getByTestId('RatingCard.Input').type(feedback);
    cy.getByTestId('RatingCard.Send').click();
};

declare global {
    namespace Cypress {
      interface Chainable {
        setRate(ratingNumber: number, feedback: string): Chainable<void>
      }
    }
  }
