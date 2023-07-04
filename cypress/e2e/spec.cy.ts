describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000');

    cy.contains('ㅎㅇㅎㅇ').click();
    cy.contains('하이하이').should('exist');
  });
});
