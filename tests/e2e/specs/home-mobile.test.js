// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.viewport('iphone-6')

    cy.visit('/')

    cy.get('[aria-label="Close menu"]').should('not.be.visible')
    cy.get('input[placeholder="Search"]').should('not.be.visible')

    cy.get('[aria-label="Open menu"]').click()
    cy.get('[aria-label="Open menu"]').should('not.be.visible')
    cy.get('input[placeholder="Search"]').should('be.visible')

    cy.get('[aria-label="Close menu"]').click()
    cy.get('[aria-label="Close menu"]').should('not.be.visible')
    cy.get('input[placeholder="Search"]').should('not.be.visible')
  })
})
