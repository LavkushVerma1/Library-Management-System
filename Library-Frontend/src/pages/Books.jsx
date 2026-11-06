import { useEffect, useState } from "react";
import { getAllBooks, deleteBook } from "../services/bookService";

function Books() {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        loadBooks();
    }, []);

    const loadBooks = async () => {
        const data = await getAllBooks();
        setBooks(data);
    };

    const handleDelete = async (id) => {
        await deleteBook(id);
        loadBooks();
    };

    return (
        <div>

            <h1>Library Books</h1>

            {books.map((book) => (
                <div key={book.id}>

                    <h3>{book.title}</h3>

                    <p>Author: {book.author}</p>

                    <p>ISBN: {book.isbn}</p>

                    <button onClick={() => handleDelete(book.id)}>
                        Delete
                    </button>

                </div>
            ))}

        </div>
    );
}

export default Books;