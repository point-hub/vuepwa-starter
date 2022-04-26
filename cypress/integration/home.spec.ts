describe('The Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should contains "Home" in home page', () => {
    cy.url().should('eq', Cypress.config('baseUrl') + '/');
    cy.contains('Home').should('exist');
  });
});
