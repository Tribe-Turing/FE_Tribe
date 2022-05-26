describe('Chat/ChatList', () => {
  it('As a user, I should be able to view my recent conversations by clicking on the chat icon', () => {
    cy.intercept('GET', 'https://be-tribe.herokuapp.com/api/v1/users', {fixture: 'allUsers.json'})
    cy.intercept('GET', 'https://be-tribe.herokuapp.com/api/v1/users/1', {fixture: 'singleUser.json'})
    cy.visit('http://localhost:3000/login/1')

    cy.get('.chat-button').click()
      .url().should('eq', 'http://localhost:3000/chatlist')
      .get('.message-container:first').within(message => {
        cy.get('.chat-name').should('contain', 'Shelley Smithe')
          .get('.last-message').should('contain', 'Test 2')
      })
  });

  it('As a user, I should be able to route to /chatlist and see all of my active conversations', () => {
    cy.intercept('GET', 'https://be-tribe.herokuapp.com/api/v1/users', {fixture: 'allUsers.json'})
    cy.intercept('GET', 'https://be-tribe.herokuapp.com/api/v1/users/1', {fixture: 'singleUser.json'})
    cy.visit('http://localhost:3000/login/1')
    cy.visit('http://localhost:3000/chatlist')

    cy.get('.chat-button').click()
      .url().should('eq', 'http://localhost:3000/chatlist')
      .get('.message-container:first').within(message => {
        cy.get('.chat-name').should('contain', 'Shelley Smithe')
          .get('.last-message').should('contain', 'Test 2')
      })
  });

  it('As a user, I should be able to navigate to a user profile and click to message them, and be redirected to a new conversation with that user', () => {
    cy.intercept('GET', 'https://be-tribe.herokuapp.com/api/v1/users', {fixture: 'allUsers.json'})
    cy.intercept('GET', 'https://be-tribe.herokuapp.com/api/v1/users/1', {fixture: 'singleUser.json'})
    cy.intercept('GET', 'https://be-tribe.herokuapp.com/api/v1/conversations/1', {fixture: 'conversation.json'})
    cy.visit('http://localhost:3000/login/1')
    cy.visit('http://localhost:3000/chatlist')

    cy.get('.chat-button').click()
      .url().should('eq', 'http://localhost:3000/chatlist')
      .get('.last-message').should('contain', 'Test 2').click()
      .url().should('eq', 'http://localhost:3000/conversations/1')
  });

  it.skip('As a user, I should be able to navigate to an existing conversation and the page should be loaded with existing messages', () => {

  });

  it.skip('As a user, I should be able to open an existing conversation, message the user, and have the message render in real time', () => {

  });
})
