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
    const [editedReview, setEditedReview] = useState({
        comment: "",
        favorite: false,
        book_id: thisBook.id,
        user_id: user.id
    })

    

    const handleSubmitReview = (e, review) => {
        e.preventDefault();
        fetch('/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(review)
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
        setEditedReview(formValues)
    }
    //handleChange for editing form
    const handleEditChange = (e) => {
        console.log('edit target', e.target.value)
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        setEditedReview({...editedReview, [name]:value})
    }
    console.log('edited review', editedReview)


    return(
      <div class='center'>
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
                            review={review}
                            editedReview={editedReview}
                            handleEditChange={handleEditChange}
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