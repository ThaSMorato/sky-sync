describe('Home e2e test', () => {
  it('should search for a city and change to F/Miles', () => {
    cy.visit('http://localhost:8080')

    cy.get('[data-cy="input"]')
      .first()
      .type('Jaboticabal')
      .should('have.value', 'Jaboticabal')

    cy.get('[data-cy="submit"]').first().click()

    cy.get('[data-cy="location"').should('have.text', 'Jaboticabal, Sao Paulo')

    cy.get('[data-cy="description"').invoke('text').should('not.include', '- -')

    cy.get('[data-cy="temp"]')
      .as('temp')
      .invoke('text')
      .should('not.include', '- -')
    cy.get('@temp').invoke('text').should('include', 'C°')
    cy.get('[data-cy="wind"')
      .as('wind')
      .invoke('text')
      .should('not.include', '- -')
    cy.get('@wind').invoke('text').should('include', 'K/h')
    cy.get('[data-cy="humidity"')
      .as('humidity')
      .invoke('text')
      .should('not.include', '- -')
    cy.get('@humidity').invoke('text').should('include', '%')

    cy.get('[data-cy="average"')
      .as('average')
      .first()
      .invoke('text')
      .should('include', 'C°')

    cy.get('[data-cy="min"')
      .as('min')
      .first()
      .invoke('text')
      .should('include', 'C°')
    cy.get('[data-cy="max"')
      .as('max')
      .first()
      .invoke('text')
      .should('include', 'C°')

    cy.get('[data-cy="switch"').click({ multiple: true })

    cy.get('@temp').invoke('text').should('include', 'F°')
    cy.get('@average').first().invoke('text').should('include', 'F°')
    cy.get('@min').first().invoke('text').should('include', 'F°')
    cy.get('@max').first().invoke('text').should('include', 'F°')
    cy.get('@wind').invoke('text').should('include', 'M/h')
  })
})
