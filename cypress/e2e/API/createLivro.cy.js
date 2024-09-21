
describe('/books POST', () => {

  before(() => {
    cy.dropCollection('books', { database: 'test', failSilently: 'true' }).then(result => {
      cy.log(result); // Will return 'Collection dropped' or the error object if collection doesn’t exist. Will not fail the test
    });
  })


  it('create book', () => {

    const book = {
      "title": "Senhor dos Anéis",
      "author": "J.R.R. Tolkien",
      "publisher": "HarperCollins",
      "year": 1954,
      "pages": 1178
    }

    cy.postBook(book).then(response => {
      expect(response.status).to.eql(201)
      expect(response.body.title).to.eql(book.title)
      expect(response.body._id).to.not.be.empty
    })
  })
  it('not should create book duplicate title', () => {

    const book = {
      "title": "Harry Potter e a Pedra Filosofal",
      "author": "J.K. Rowling",
      "publisher": "Rocco",
      "year": 1997,
      "pages": 223
    }

    cy.postBook(book).then(response =>{
      expect(response.status).to.eql(201)
    })
    cy.postBook(book).then(response =>{
      expect(response.status).to.eql(409)
    })
    
  })
})