describe('Profile Settings', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://be-tribe.herokuapp.com/api/v1/users', {fixture: 'allUsers.json'})
    const url = 'http://localhost:3000/settings'
    cy.visit('http://localhost:3000/login/1')
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
      .should('contain', 'Edit Your Profile')
  })
  it('should display a form to update the location, pronouns, interests, and bio', () => {
    cy.get('form')
      .should('be.visible')
      .within(form => {
        cy.get('label').should('have.length', 17).should('be.visible')
        cy.get('input').should('have.length', 16).should('be.visible')
        cy.get('button').should('have.length', 1).should('be.visible')
      })

    cy.get('label').first().contains('Location: ')
    cy.get('#city').should('have.attr', 'placeholder').and('contains', 'Denver, CO')
    
    cy.get('form > :nth-child(2)')
      .contains('Would you like to update your pronouns?')
      cy.get('div[class="pronoun-radio"]')
      .should(($input) => {
        expect($input).to.have.length(5)
        expect($input.eq(0)).to.contain('she/her')
        expect($input.eq(1)).to.contain('he/him')
        expect($input.eq(2)).to.contain('they/them')
        expect($input.eq(3)).to.contain('ze/zie')
        expect($input.eq(4)).to.contain('name')
    })
  
    cy.get('#bio')
    .should('have.attr', 'placeholder', 'What do you want to bring to tribe?')
      .contains('self proclaimed cool kid from the block')

    cy.get('div[class="interest-container"]')
      .should(($input) => {
        expect($input).to.have.length(10)
        expect($input.eq(0)).to.contain('Sports')
        expect($input.eq(1)).to.contain('Nature')
        expect($input.eq(2)).to.contain('Music')
        expect($input.eq(3)).to.contain('Night Life')
        expect($input.eq(4)).to.contain('Art')
        expect($input.eq(5)).to.contain('Cinema')
        expect($input.eq(6)).to.contain('Food')
        expect($input.eq(7)).to.contain('Gaming')
        expect($input.eq(8)).to.contain('Traveling')
        expect($input.eq(9)).to.contain('Networking')
      })

    cy.get('.submit-button')
      .should('be.visible')
      .contains('Save Changes')
  })
  it('should be able to submit a form to update the location, pronouns, interests, and bio of a user', () => {

  })
});