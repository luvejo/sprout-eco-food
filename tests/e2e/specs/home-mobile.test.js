// https://docs.cypress.io/api/introduction/api.html

describe('Test home page on mobile viewport', () => {
  beforeEach(() => {
    cy.viewport('iphone-6')
    cy.visit('/')
  })

  it('can toggle the navbar menu', () => {
    cy.get('[aria-label="Close menu"]').should('not.be.visible')
    cy.get('input[placeholder="Search"]').should('not.be.visible')

    cy.get('[aria-label="Open menu"]').click()
    cy.get('[aria-label="Open menu"]').should('not.be.visible')
    cy.get('input[placeholder="Search"]').should('be.visible')

    cy.get('[aria-label="Close menu"]').click()
    cy.get('[aria-label="Close menu"]').should('not.be.visible')
    cy.get('input[placeholder="Search"]').should('not.be.visible')
  })

  it('can add and remove a product from the shopping cart', () => {
    // Adding first product.
    cy.get('[aria-label="Toggle shopping cart"]').should('not.be.visible')

    cy.get('[aria-label="Add product"]')
      .should('be.visible')
      .first()
      .click()

    cy.get('[aria-label="Toggle shopping cart"]')
      .should('be.visible')
      .contains(1)

    cy.contains('My shopping cart:').should('not.be.visible')
    cy.get('button:contains("To checkout")').should('be.not.visible')

    // Adding a second product.
    cy.get('[aria-label="Shift products to the left"]')
      .first()
      .click()

    cy.get('[aria-label="Add product"]')
      .should('be.visible')
      .first()
      .click()

    cy.get('[aria-label="Toggle shopping cart"]')
      .should('be.visible')
      .contains(2)

    cy.get('[aria-label="Toggle shopping cart"]:visible')
      .last()
      .click()

    cy.get('button:contains("To checkout")').should('be.visible')

    cy.get(':contains("Subtotal")')
      .filter(':visible')
      .closest('p')
      .parent()
      .contains('$8.00')

    // Increment first product's quantity.
    cy.get('[aria-label="Increment product quantity"]')
      .filter(':visible')
      .first()
      .dblclick()

    cy.get(':contains("Subtotal")')
      .filter(':visible')
      .closest('p')
      .parent()
      .contains('$16.00')

    // Decrement first product's quantity.
    cy.get('[aria-label="Decrement product quantity"]')
      .filter(':visible')
      .first()
      .click()

    cy.get(':contains("Subtotal")')
      .filter(':visible')
      .closest('p')
      .parent()
      .contains('$12.00')

    // Removing the first product.
    cy.get('[aria-label="Remove product"]')
      .filter(':visible')
      .first()
      .click()

    cy.get(':contains("Subtotal")')
      .filter(':visible')
      .closest('p')
      .parent()
      .contains('$4.00')

    cy.get('[aria-label="Toggle shopping cart"]')
      .should('be.visible')
      .contains(1)
  })
})
