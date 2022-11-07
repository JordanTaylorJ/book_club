import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';


const EditReview = ({handleEditChange, review, handleSubmitEdit}) => {

    return(
        <div>
            <h3>EditReview</h3>
            <Box
                component="form"
                onSubmit={(e) => handleSubmitEdit(e, review)}
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
                onChange={(e) => handleEditChange(e)} 
            />
            <Checkbox
                label="Favorite" 
                type="checkbox"
                name='favorite'
                icon={<FavoriteOutlinedIcon/>} 
                checkedIcon={<FavoriteIcon/>}
                value={review.favorite}
                onChange={(e) => handleEditChange(e)} 
            />
            <Button
                type='submit' 
                value="submit"
            > Save 
            </Button>
            <Button
                type='submit' 
                value="submit"
            > Cancel 
            </Button>
        </Box>
      </div>
    )
}

export default EditReview;