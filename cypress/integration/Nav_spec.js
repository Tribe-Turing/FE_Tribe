describe('Nav', () => {
    it('As a User, I should see the other button', () => {
<<<<<<< HEAD
        cy.intercept('GET', 'https://be-tribe.herokuapp.com/api/v1/users', {fixtures: 'allUsers.json'})
=======
>>>>>>> d6518bc9ab8f58d60635f55aa2a2af26511fa7e0
        cy.visit('http://localhost:3000/')
        .get('button[class="settings-nav-button"]')
        .should('contain', 'Other')
        .should('be.visible')
    })
    it('As a user, I should be able to click the settings button', ()=> {
<<<<<<< HEAD
        cy.intercept('GET', 'https://be-tribe.herokuapp.com/api/v1/users', {fixtures: 'allUsers.json'})
=======
>>>>>>> d6518bc9ab8f58d60635f55aa2a2af26511fa7e0
        cy.visit('http://localhost:3000/')
        .get('button[class="settings-nav-button"]').click()
        .url().should('eq', 'http://localhost:3000/settings')
    })
    it('As a user, I should see a chat button and be able to click it', () => {
<<<<<<< HEAD
        cy.intercept('GET', 'https://be-tribe.herokuapp.com/api/v1/users', {fixtures: 'allUsers.json'})
=======
>>>>>>> d6518bc9ab8f58d60635f55aa2a2af26511fa7e0
        cy.visit('http://localhost:3000/')
        .get('button[class="chat-button"]')
        .should('contain', 'Chat')
        .should('be.visible')
        .click()
        .url().should('eq', 'http://localhost:3000/chatlist')
    })
    it('As a user, I should be able to click the friends button to go back to the dashboard', () => {
<<<<<<< HEAD
        cy.intercept('GET', 'https://be-tribe.herokuapp.com/api/v1/users', {fixtures: 'allUsers.json'})
=======
>>>>>>> d6518bc9ab8f58d60635f55aa2a2af26511fa7e0
        cy.get('button[class="friends-button"]')
        .should('contain', 'Friends')
        .should('be.visible')
        .click()
        .url().should('eq', 'http://localhost:3000/')
    })
})