describe('My First Test', () => {
  it('Visits the Kitchen Sink', () => {
		cy.visit('https://example.cypress.io')

		cy.contains('type').click()

		cy.url().should('include', '/commands/actions')

		cy.get('.action-email')
		  .type('lol@gmail.com')
		  .should('have.value', 'lol@gmail.com')
  })
})

