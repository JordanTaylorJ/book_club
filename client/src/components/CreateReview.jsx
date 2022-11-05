import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';


const CreateReview = ({thisBook, user, handleSubmitReview}) => {

    const [review, setReview] = useState({
        comment: "",
        favorite: false,
        book_id: thisBook.id,
        user_id: user.id
    });

    const handleChange = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        setReview({...review, [name]:value})
    }

    return(
        <div>
            <h3>Add your review. Heart to add it to your favorite collection!</h3>
            <Box
                component="form"
                onSubmit={(e) => handleSubmitReview(e, review)}
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
            > Add Review 
            </Button>
        </Box>
      </div>
    )
}

export default CreateReview;