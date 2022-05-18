describe('Profile Settings', () => {
  beforeEach(() => {
    const url = 'http://localhost:3000/settings'
    cy.visit(url)
  })

  it('should display the settings path in the url when on profile settings view', () => {
    cy.url()
      .should('eq', 'http://localhost:3000/settings')
  })
  it('should display the header and nav components on the profile settings view', () => {
    cy.get('header')
      .should('be.visible')

    cy.get('nav')
      .should('be.visible')
  })
  it('should display the title/heading of profile settings view', () => {
    cy.get('h1')
      .should('be.visible')
      .contains('Edit Your Profile')
  })
  it.only('should display a form to update the location, pronouns, interests, and bio', () => {
    cy.get('form')
      .should('be.visible')
      .within(form => {
        cy.get('label').should('have.length', 17)
        cy.get('input').should('have.length', 17)
        cy.get('button').should('have.length', 1)
      })

    cy.get('.submit-button')
      .should('be.visible')
      .contains('Submit')
  })
  it('should be able to submit a form to update the location, pronouns, interests, and bio of a user', () => {

  })
});