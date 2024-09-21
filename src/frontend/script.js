const api_url = 'http://localhost:5050/api/books';

// Função para adicionar um livro
document.getElementById('bookForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const publisher = document.getElementById('publisher').value;
    const year = document.getElementById('year').value;
    const pages = document.getElementById('pages').value;

    const book = {
        title,
        author,
        publisher,
        year: parseInt(year),
        pages: parseInt(pages)
    };

    try {
        const response = await fetch(api_url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(book),
        });
        const newBook = await response.json();
        alert('Livro cadastrado com sucesso!');
        addBookToList(newBook);
        document.getElementById('bookForm').reset();
    } catch (error) {
        alert('Erro ao cadastrar o livro!');
    }
});

// Função para carregar a lista de livros
async function loadBooks() {
    try {
        const response = await fetch(api_url);
        const books = await response.json();
        books.forEach(addBookToList);
    } catch (error) {
        alert('Erro ao carregar os livros. HELP');
    }
}

// Função para adicionar um livro à lista no DOM
function addBookToList(book) {
    const bookList = document.getElementById('bookList');
    const li = document.createElement('li');
    li.innerHTML = `
        <span><strong>${book.title}</strong> - ${book.author} (${book.year})</span>
        <button onclick="deleteBook('${book._id}')">Deletar</button>
    `;
    bookList.appendChild(li);
}

// Função para deletar um livro
async function deleteBook(id) {
    if (confirm('Tem certeza que deseja deletar este livro?')) {
        try {
            await fetch(`${api_url}/${id}`, { method: 'DELETE' });
            alert('Livro deletado com sucesso!');
            location.reload();
        } catch (error) {
            alert('Erro ao deletar o livro.');
        }
    }
}

// Carrega a lista de livros ao carregar a página
loadBooks();
