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
        cy.get('label').should('have.length', 17).should('be.visible')
        cy.get('input').should('have.length', 17).should('be.visible')
        cy.get('button').should('have.length', 1).should('be.visible')
      })

    cy.get('label').first().contains('Change location')
    cy.get('#location').should('have.attr', 'placeholder').and('contains', 'Denver, CO')
    
    cy.get('form > :nth-child(3)')
      .contains('Would you like to update your pronouns?')

    cy.get('form > :nth-child(5)')
      .contains('she/her')

    cy.get('form > :nth-child(7)')
      .contains('he/him')

    cy.get('form > :nth-child(9)')
      .contains('they/them')

    cy.get('form > :nth-child(11)')
      .contains('ze/zie')

    cy.get('form > :nth-child(13)')
      .contains('name')

    cy.get(':nth-child(14)')
      .contains('Would you like to update your interests?')

    cy.get('form > :nth-child(16)')
      .contains('Sports')
    
    cy.get('form > :nth-child(18)')
      .contains('Nature')

    cy.get('form > :nth-child(20)')
      .contains('Music')

    cy.get('form > :nth-child(22)')
      .contains('Night Life')

    cy.get('form > :nth-child(24)')
      .contains('Art')

    cy.get('form > :nth-child(26)')
      .contains('Cinema')

    cy.get('form > :nth-child(28)')
      .contains('Food')

    cy.get('form > :nth-child(30)')
      .contains('Video Games')

    cy.get('form > :nth-child(32)')
      .contains('Traveling')

    cy.get('form > :nth-child(34)')
      .contains('Networking')




    cy.get('label').last().contains('Bio')

    cy.get('.submit-button')
      .should('be.visible')
      .contains('Submit')
  })
  it('should be able to submit a form to update the location, pronouns, interests, and bio of a user', () => {

  })
});