import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';

const CreateReview = ({thisBook, user, handleSubmitReview}) => {

    const [newReview, setNewReview] = useState({
        comment: "",
        favorite: false,
        book_id: thisBook.id,
        user_id: user.id
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        handleSubmitReview(newReview)
        setNewReview({
            comment: "",
            favorite: false,
            book_id: thisBook.id,
            user_id: user.id
        })
    }
    
    const handleNewReviewChange = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        setNewReview({...newReview, [name]:value})
    }

    return(
        <div>
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
                id="outlined-multiline-flexible"
                label="Comment" 
                variant="standard" 
                multiline
                maxRows={4}
                type='text'
                name='comment'
                value={newReview.comment}
                onChange={(e) => handleNewReviewChange(e)} 
            />
            <Checkbox
                label="Favorite" 
                type="checkbox"
                name='favorite'
                icon={<FavoriteOutlinedIcon/>} 
                checkedIcon={<FavoriteIcon/>}
                value={newReview.favorite}
                onChange={(e) => handleNewReviewChange(e)} 
            />
            <Button
                type='submit' 
                value="submit"
            > Add Review 
            </Button>
        </Box>
      </div>
    )
}

export default CreateReview;