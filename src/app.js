// app.js
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

// Conectando ao MongoDB
mongoose.connect('mongodb+srv://dba:study123@booksapi.8dskh.mongodb.net/?retryWrites=true&w=majority&appName=booksAPI',)

    .then(() => console.log('Conectado ao MongoDB'))
    .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

// Middlewares
app.use(express.json());

// Rotas
app.use('/api', routes);

// Iniciando o servidor
const port = process.env.port || 5000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
