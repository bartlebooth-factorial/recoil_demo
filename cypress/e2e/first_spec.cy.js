describe('Color test', () => {
	before(() => {
		cy.visit('http://localhost:3000');
		cy.waitForReact(1000, '#root');
	});

  it('Selects color purple', () => {
		cy.visit('http://localhost:3000')
		cy.waitForReact(1000, '#root');
		cy.contains('purple').click()
		cy.react('Demo').should('have.value', 'purple')
  })
})

