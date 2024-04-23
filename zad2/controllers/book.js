const Book = require('../models/Book');

const getBooksList = (request, response) => {
    const userId = request.session.userId;
    const books = Book.getAll();
    response.render('books', { title: 'Books', userId, books });
};

const getBookDetails = (request, response) => {
    const userId = request.session.userId;
    const bookId = request.params.id;
    const books = Book.getAll();
    const book = books.find(book => book.id === parseInt(bookId));
    if (book) {
        response.render('book-details', { title: book.title, userId, book });
    } else {
        response.status(404).render('not-found', { title: '404 - Page Not Found' });
    }
};

module.exports = {
    getBooksList,
    getBookDetails
};
