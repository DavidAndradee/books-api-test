Cypress.Commands.add('postBook', (book)=>{
    cy.api({
      url: 'http://localhost:5000/api/books',
      method: 'POST',
      body: book,
      failOnStatusCode: false
    }).then(response => {
      return response
    })
  })