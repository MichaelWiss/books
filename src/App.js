import { useState, useEffect } from 'react';
import axios from 'axios';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';


function App() {
    useEffect(() => {
        fetchBooks();
    }, []);

    


    return (
        <div className="app">
        <h1>Reading List</h1>
        <BookList onEdit={editBookById} books={books} onDelete={deleteBookById} />
        <BookCreate onCreate={createBook}/>
    </div>
    );
}

export default App;