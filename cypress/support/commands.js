Cypress.Commands.add('getBooks',()=>{
  cy.api({
    url: 'http://localhost:5050/api/books',
    method: 'GET',
  }).then(response =>{
    return response
  })
})


Cypress.Commands.add('postBook', (book)=>{
    cy.api({
      url: 'http://localhost:5050/api/books',
      method: 'POST',
      body: book,
      failOnStatusCode: false
    }).then(response => {
      return response
    })
  })

Cypress.Commands.add('deleteBook',(id) =>{
  cy.api({
    url: `http://localhost:5050/api/books/${id}`,
    method: 'DELETE',
    failOnStatusCode: false
  }).then(response => {
    return response
  })
})

