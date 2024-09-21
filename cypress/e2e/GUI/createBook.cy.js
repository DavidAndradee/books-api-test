describe('Criar um novo Livro', () => {

    it('create new book', () => {
        cy.visit('http://127.0.0.1:5500/src/frontend/indes.html')
        cy.get('#title').type('David History')
        cy.get('#author').type('David Andrade')
        cy.get('#publisher').type('saraiva')
        cy.get('#year').type('2024')
        cy.get('#pages').type(200)
        cy.get('#bookForm > button').click()
        cy.get('#bookList').contains('David History')
    });

})