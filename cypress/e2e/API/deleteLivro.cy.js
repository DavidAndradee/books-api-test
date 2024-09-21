describe('/books DELETE', () => {

    // before(() => {
    //     cy.dropCollection('books', { database: 'test', failSilently: 'true' }).then(result => {
    //         cy.log(result); // Will return 'Collection dropped' or the error object if collection doesn’t exist. Will not fail the test
    //     });
    // })


    it('delete book', () => {
        const book = {
            "title": "Senhor dos Anéis",
            "author": "J.R.R. Tolkien",
            "publisher": "HarperCollins",
            "year": 1954,
            "pages": 1178
          }

          cy.deleteBook(book._id).then(response =>{
            expect(response.status).to.eql(200)
            expect(response.message).contain('Livro deletado com sucesso.')
          })
    });




})