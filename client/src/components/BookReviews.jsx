import React, {useState} from 'react';
import CreateReview from './CreateReview';
import { useLocation } from "react-router-dom";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

const BookReviews = ({books, setBooks, user}) => {

    let location = useLocation();
    const thisBook = books.find(book => book.id == location.state.id)

    const [reviews, setReviews] = useState(thisBook.reviews)


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
                    ...book, review:[updatedReviews]
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
        fetch('/destroy', {
            method: 'DELETE'
        })
        .then(r => {
            if (r.ok) {
                r.json().then(r => handleDeleteReview(r))
            }
        })
    }

    const handleDeleteReview = (review) => {
        
    }
 
    return(
        <Box style={{
            position: 'absolute', 
            left: '40%', 
            top: '58%',
            transform: 'translate(-50%, -50%)'
        }}>
            <h1>{thisBook.title}</h1>
            <List sx={{ width: '100%', maxWidth: 1000, bgcolor: '#bae0af' }}>
                {reviews.map(review => {
                    return(
                        <>
                        <ListItem alignItems="flex-start" key={review.id}>
                        <ListItemText
                            primary={review.user.username}
                            secondary={
                                <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.secondary"
                                >
                                {review.comment}
                                </Typography>
                            }
                        />
                        {(review.favorite === true) ? (<FavoriteIcon/>) : <></>}
                        {(review.user_id === user.id) ? 
                        (<Button onClick={(e) => handleDelete(e)}>
                            x
                        </Button>) 
                        : <></>}
                        </ListItem>
                        <Divider component="li"/>
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
        </Box>
    )
}

export default BookReviews;