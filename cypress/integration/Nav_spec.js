describe('Nav', () => {
    it('As a User, I should see the other button', () => {
        cy.visit('http://localhost:3000/')
        .get('button[class="settings-nav-button"]')
        .should('contain', 'Other')
        .should('be.visible')
    })
    it('As a user, I should be able to click the settings button', ()=> {
        cy.visit('http://localhost:3000/')
        .get('button[class="settings-nav-button"]').click()
        .url().should('eq', 'http://localhost:3000/settings')
    })
    it('As a user, I should see a chat button and be able to click it', () => {
        cy.visit('http://localhost:3000/')
        .get('button[class="chat-button"]')
        .should('contain', 'Chat')
        .should('be.visible')
        .click()
        .url().should('eq', 'http://localhost:3000/chatlist')
    })
})