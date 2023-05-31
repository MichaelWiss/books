import React, { useState } from 'react';


function App() {
    const [books, setBooks] = useState([]);

    const createBook = (title) => {
        console.log('Need to add book with:', title);
    };


    return <div>App</div>;
}

export default App;