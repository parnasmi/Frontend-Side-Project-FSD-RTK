let profileId = '';

describe('User enters profile page', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login().then((data) => {
            profileId = data.id;
            cy.visit(`profile/${data.id}`);
        });
    });

    afterEach(() => {
        cy.resetProfile(profileId);
    });

    it('Profile page loads successfully', () => {
        cy.getByTestId('ProfileCard.firstname').should('have.value', 'test');
    });

    it('add edits it', () => {
        const firstName = 'new';
        const lastName = 'new lastname';

        cy.updateProfile(firstName, lastName);

        cy.getByTestId('ProfileCard.firstname').should('have.value', firstName);
        cy.getByTestId('ProfileCard.lastname').should('have.value', lastName);
    });
});
