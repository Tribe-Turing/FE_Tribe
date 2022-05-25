describe('Nav', () => {
    beforeEach(() => {
        cy.intercept('GET', 'https://be-tribe.herokuapp.com/api/v1/users', {fixture: 'allUsers.json'})
        cy.visit('http://localhost:3000/login/1')
      })
    it('As a User, I should see the settings button, and be able to click it', () => {
        cy.visit('http://localhost:3000/')
        .get('button[class="settings-button"]')
        .should('be.visible')
        .click()
        .url().should('eq', 'http://localhost:3000/settings')
    })
    it('As a user, I should see a chat button and be able to click it', () => {
        cy.visit('http://localhost:3000/')
        .get('button[class="chat-button"]')
        .should('be.visible')
        .click()
        .url().should('eq', 'http://localhost:3000/chatlist')
    })
    it('As a user, I should be able to click the home button to go back to the dashboard', () => {
        cy.get('button[class="home-button"]')
        .should('be.visible')
        .click()
        .url().should('eq', 'http://localhost:3000/')
    })
})