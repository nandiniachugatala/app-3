describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/');
    cy.contains('Hello, app-3', { timeout: 10000 }); // Adjust the timeout as needed (in milliseconds)
  });
});
