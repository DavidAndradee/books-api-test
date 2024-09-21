describe('Criar um novo Livro', () => {

    beforeEach(() => {
        cy.fixture('example').then(function (exemple) {
            this.exemple = exemple
        })
    })

    it('create new book', function () {
        const ex = this.exemple
        cy.visit('http://127.0.0.1:5500/src/frontend/indes.html')
        cy.get('#title').type(ex.title)
        cy.get('#author').type(ex.author)
        cy.get('#publisher').type(ex.publisher)
        cy.get('#year').type(ex.year)
        cy.get('#pages').type(ex.pages)
        cy.get('#bookForm > button').click()
        cy.get('#bookList').contains(ex.title)
    });

})