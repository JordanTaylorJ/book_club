import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';


const CreateReview = ({books, setBooks}) => {

    const [reviews, setReviews] = useState('')

    const [review, setReview] = useState({
        comment: "",
        favorite: false
    });

    const handleChange = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        setReview({...review, [name]:value})
    }
    console.log('review', review)

    const handleSubmit = (e) => {
        console.log('something here :D')
        e.preventDefault();
        fetch('/reviews/create', {
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
        const newBooks = books.map((book) => {
            if (book.id === review.book_id){
                return{
                    ...book, review:[updatedReviews]
                } 
            } else {
                return book
            }
        })
        setReviews(updatedReviews);
        setBooks(newBooks);
    }
    

    return(
        <>
            <h2>Add your review for xthis bookx. Heart to add it to your favorite collection!</h2>
            <Box
            component="form"
            onSubmit={(e) => handleSubmit(e)}
            sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField 
                id="standard-basic" 
                label="Comment" 
                variant="standard" 
                type='text'
                name='comment'
                value={review.comment}
                onChange={(e) => handleChange(e)} 
            />
            <Checkbox
                label="Favorite" 
                type="checkbox"
                name='favorite'
                icon={<FavoriteOutlinedIcon/>} 
                checkedIcon={<FavoriteIcon/>}
                value={review.favorite}
                onChange={(e) => handleChange(e)} 
            />
            <Button
                type='submit' 
                value="submit"
            >
                Add Review
            </Button>
            
        </Box>
      </>
    )
}

export default CreateReview;