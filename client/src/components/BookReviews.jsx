import React from 'react';
import CreateReview from './CreateReview';
import { useLocation } from "react-router-dom";

const BookReviews = ({books, setBooks, user}) => {

    let location = useLocation();
    const thisBook = books.find(book => book.id == location.state.id)

    return(
        <>
            <h1> Reviews</h1>
            <p>list reviews here ??</p>
            <CreateReview books={books} setBooks={setBooks} bookId={location.state.id} user={user}/>
        </>
    )
}

export default BookReviews;