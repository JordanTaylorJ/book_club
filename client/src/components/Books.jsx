import React from 'react';

const Books = ({user}) => {

    return(
        <> 
            <h1>Books</h1>
            {user.books.map(book => <ul key={book.id}>{book.title}</ul>)}
        </>
    )
}

export default Books; 