import React, { useState } from 'react';
import axios from 'axios';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';


function App() {
    const [books, setBooks] = useState([]);

    const editBookById = async (id, newTitle) => {
        await axios.put(`http://localhost:3001/books/${id}`, {
            title: newTitle
        })

        const updatedBooks = books.map((book) => {
            if (book.id === id) {
               return {...book, title: newTitle }; 
            }

            return book;
        });

        setBooks(updatedBooks);

        useEffect(() => {
            fetchBooks();
        }, []);
    };

    const deleteBookById = (id) => {
            const updatedBooks = books.filter((book) => {
                return book.id !== id;
            });

            setBooks(updatedBooks);
        };

    const createBook = async (title) => {
        const response = await axios.post('http://localhost:3001/books', {
            title,
        });

        console.log(response);

        const updatedBooks = [
            ...books,
           response.data
        ];

        setBooks(updatedBooks);
    };


    return (
        <div className="app">
        <h1>Reading List</h1>
        <BookList onEdit={editBookById} books={books} onDelete={deleteBookById} />
        <BookCreate onCreate={createBook}/>
    </div>
    );
}

export default App;