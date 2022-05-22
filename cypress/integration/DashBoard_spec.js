describe('Dashboard', () => {
    it('As a user, when the page loads I should see a dashboard of user profiles', () => {
<<<<<<< HEAD
        cy.intercept('GET', 'https://be-tribe.herokuapp.com/api/v1/users', {fixture: 'allUsers.json'})
=======
>>>>>>> d6518bc9ab8f58d60635f55aa2a2af26511fa7e0
        cy.visit('http://localhost:3000/')
        .get('div[class="user-card"]')
        .should(($div) => {
            expect($div).to.have.length(13)
            expect($div.eq(0)).to.contain('Susan')
            expect($div.eq(1)).to.contain('Shelley')
            expect($div.eq(2)).to.contain('Millie')
            expect($div.eq(3)).to.contain('Marti')
            expect($div.eq(4)).to.contain('Sunny')
            expect($div.eq(5)).to.contain('Teodorico')
            expect($div.eq(6)).to.contain('Rhiamon')
            expect($div.eq(7)).to.contain('Marijo')
            expect($div.eq(8)).to.contain('Linell')
            expect($div.eq(9)).to.contain('Coleen')
            expect($div.eq(10)).to.contain('Milissent')
            expect($div.eq(11)).to.contain('Solomon')
            expect($div.eq(12)).to.contain('Sarita')
        })
    })
    it('As a user, I should be able to filter by interestes to change my dashboard view', () => {
<<<<<<< HEAD
        cy.intercept('GET', 'https://be-tribe.herokuapp.com/api/v1/users', {fixture: 'allUsers.json'})
=======
>>>>>>> d6518bc9ab8f58d60635f55aa2a2af26511fa7e0
        cy.visit('http://localhost:3000/')
        .get('select').select('nature')
        .should('have.value', 'nature')
        .get('div[class="user-card"]')
        .should(($div) => {
            expect($div).to.have.length(6)
            expect($div.eq(0)).to.contain('Susan')
            expect($div.eq(1)).to.contain('Marti')
            expect($div.eq(2)).to.contain('Teodorico')
            expect($div.eq(3)).to.contain('Rhiamon')
            expect($div.eq(4)).to.contain('Coleen')
            expect($div.eq(5)).to.contain('Milissent')
        })
    })
    it('As a user, I should be able to click on a user profile to see more about info for that user', () => {
<<<<<<< HEAD
        cy.intercept('GET', 'https://be-tribe.herokuapp.com/api/v1/users', {fixture: 'allUsers.json'})
        cy.intercept('GET', `https://be-tribe.herokuapp.com/api/v1/users/*`, {fixture: 'singleUser.json'})
=======
>>>>>>> d6518bc9ab8f58d60635f55aa2a2af26511fa7e0
        cy.visit('http://localhost:3000/')
        .get('div[class="user-card"]').first().click()
        .url().should('eq', 'http://localhost:3000/user')
        .get('h2').should('contain', 'Susan')
        .get('p').first()
        .should('contain', 'she/her')
        .get('p').last()
        .should('contain', 'I am lonely and have too many cats')
        .get('li').should(($li) => {
            expect($li).to.have.length(2)
            expect($li.eq(0)).to.contain('animals')
            expect($li.eq(1)).to.contain('nature')
        })
        .get('button[class="message-user"]')
        .should('be.visible')
    })
})