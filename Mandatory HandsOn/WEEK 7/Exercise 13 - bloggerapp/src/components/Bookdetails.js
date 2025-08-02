import React from 'react';

const BookDetails = () => {
    const books = [
        { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, genre: "Classic" },
        { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, genre: "Fiction" },
        { id: 3, title: "1984", author: "George Orwell", year: 1949, genre: "Dystopian" },
        { id: 4, title: "Pride and Prejudice", author: "Jane Austen", year: 1813, genre: "Romance" }
    ];

    return (
        <div className="content-section">
            <h2>📚 Book Details</h2>
            <div className="cards-container">
                {books.map(book => (
                    <div key={book.id} className="card">
                        <h3>{book.title}</h3>
                        <p><strong>Author:</strong> {book.author}</p>
                        <p><strong>Year:</strong> {book.year}</p>
                        <p><strong>Genre:</strong> {book.genre}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BookDetails;