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
    
})