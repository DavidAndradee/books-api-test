// routes/bookRoutes.js
const express = require('express');
const router = express.Router();
const Book = require('./models');

// Rota para cadastrar um novo livro
router.post('/books', async (req, res) => {
    try {
        const { title, author, publisher, year, pages } = req.body;

        if (!title || !author || !publisher || !year || !pages) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
        }

        const duplicate = await Book.findOne({title: title}) 

        if (duplicate) {
            return res.status(409).json({error: 'O título do livro ja foi cadastrado !'})
        }

        const newBook = new Book({ title, author, publisher, year, pages });
        await newBook.save();
        res.status(201).json(newBook);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao cadastrar o livro.', error });
    }
});

// Rota para listar todos os livros
router.get('/books', async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar os livros.' });
    }
});

// Rota para buscar um livro por ID
router.get('/books/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).json({ error: 'Livro não encontrado.' });
        }
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar o livro.' });
    }
});

// Rota para deletar um livro por ID
router.delete('/books/:id', async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        if (!book) {
            return res.status(404).json({ error: 'Livro não encontrado.' });
        }
        res.status(200).json({ message: 'Livro deletado com sucesso.' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar o livro.' });
    }
});

module.exports = router;
