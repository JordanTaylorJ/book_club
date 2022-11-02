import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';

const CreateReview = () => {

    const [review, setReview] = useState({
        comment: "",
        favorite: false
    });

    const handleChange = () => {
        console.log('changes happening')
    }

    const handleSubmit = () => {
        console.log('something here :D')
    }
    

    return(
        <>
            <h1>form here</h1>
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
            <FavoriteIcon
                //id="standard-basic" 
                label="Favorite" 
                //variant="standard" 
                type="checkbox"
                name='image'
                value={review.favorite}
                onChange={(e) => handleChange(e)} 
            />
            <Button
                type='submit' 
                value="submit"
            >
                Add Book
            </Button>
            
        </Box>
      </>
    )
}

export default CreateReview;