import React, {useState} from 'react';
import CreateReview from './CreateReview';
import { useLocation } from "react-router-dom";
import List from '@mui/material/List';
import EditReview from './EditReview';
import ListReview from './ListReview';

const BookReviews = ({books, setBooks, user}) => {

    let location = useLocation();
    const thisBook = books.find(book => book.id == location.state.id);

    const [reviews, setReviews] = useState(thisBook.reviews);
    const [editReviewId, setEditReviewId] = useState(null);
    const [editReview, setEditReview] = useState({
        comment: "",
        favorite: false,
        book_id: thisBook.id,
        user_id: user.id
    })

    const handleSubmitReview = (newReview) => {
        fetch('/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newReview)
        })
        .then(r => r.json())
        .then(r => handleAddReview(r))
    }

    const handleAddReview = (review) => {
        const updatedReviews = [...reviews, review]
        const updatedBooks = books.map((book) => {
            if (book.id === review.book_id){
                return{
                    ...book, reviews:[updatedReviews]
                } 
            } else {
                return book
            }
        })
        setReviews(updatedReviews);
        setBooks(updatedBooks);
        setEditReview({
            comment: "",
            favorite: false,
            book_id: thisBook.id,
            user_id: user.id
        })
    }

    const handleDelete = (e) => {
        e.preventDefault();
        fetch(`/reviews/${e.target.value}`, {
            method: 'DELETE'
        })
        .then(r => {
            if (r.ok) {handleDeleteReview(e.target.value)}
        })
    }

    const handleDeleteReview = (deletedReviewId) => {
        const deletedReview = reviews.find(review => review.id == deletedReviewId)
        const updatedReviews = reviews.filter((review) => review.id !== deletedReview.id);
        const updatedBooks = books.map((book) => {
            if (book.id === deletedReview.book_id){
                return{
                    ...book, reviews:[updatedReviews]
                } 
            } else {
                return book
            }
        })
        setReviews(updatedReviews);
        setBooks(updatedBooks);
    }

    const handleSubmitEdit = (e) => {
        e.preventDefault();
        fetch(`/reviews/${editReviewId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(editReview)
        })
        .then(r=> r.json())
        .then(r => handleUpdateEditReviews(r))
    }

    const handleUpdateEditReviews = (updatedReview) => {
        const updatedReviews = reviews.map((review) => {
            if (review.id === editReviewId) {
                return updatedReview
            } else return review 
        })
        const updatedBooks = books.map((book => {
            if (book.id === updatedReview.book_id) {
                return({
                    ...book,
                    reviews: [updatedReviews]
                }) 
            } else return book 
        }))
        setReviews(updatedReviews);
        setBooks(updatedBooks);
        setEditReviewId(null);
    }
 
    //prepopulate edit data
    const handleEditReviewId = (e, review) => {
        e.preventDefault();
        setEditReviewId(review.id)
        const formValues = {
            comment: review.comment,
            favorite: review.favorite,
            book_id: review.book_id,
            user_id: review.user_id
        }
        setEditReview(formValues)
    }
    //handleChange for editing form
    const handleEditFormChange = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        setEditReview({...editReview, [name]:value})
    }

    const handleCancelEditClick = () => {
        setEditReviewId(null);
    }

    return(
      <div className='center'>
            <h1>{thisBook.title}</h1>
            <div class='box box2'>
            <img
                src={thisBook.image}
                alt={thisBook.title}
            />
            </div>
            <List sx={{ width: '100%', maxWidth: 1000, bgcolor: '#bae0af' }}>
                {reviews.map(review => {
                    return(
                        <>
                        {editReviewId === review.id ? 
                        <EditReview 
                            editReview={editReview}
                            handleEditFormChange={handleEditFormChange}
                            handleCancelEditClick={handleCancelEditClick}
                            handleSubmitEdit={handleSubmitEdit}
                        />
                        :
                        <ListReview
                            review={review}
                            user={user}
                            handleDelete={handleDelete}
                            handleEditReviewId={handleEditReviewId}
                        />
                        }
                        </>
                    )
                })}
            </List>
            {user ?
            <CreateReview 
                thisBook={thisBook} 
                user={user} 
                handleSubmitReview={handleSubmitReview}
            /> 
            : <h2>Login to join the conversation</h2>}
            <br/>
        </div>
    )
}

export default BookReviews;