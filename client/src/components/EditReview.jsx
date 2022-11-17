import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';


const EditReview = ({editReview, handleEditFormChange, handleCancelEditClick, handleSubmitEdit}) => {

    return(
            <Box
                key={editReview.id}
                component="form"
                onSubmit={(e) => handleSubmitEdit(e)}
                sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
            <TextField 
                id="outlined-multiline-flexible"
                multiline
                maxRows={4}
                label="Comment" 
                variant="standard" 
                type='text'
                name='comment'
                value={editReview.comment}
                onChange={(e) => handleEditFormChange(e)} 
            />
            <Checkbox
                label="Favorite" 
                type="checkbox"
                name='favorite'
                icon={<FavoriteOutlinedIcon/>} 
                checkedIcon={<FavoriteIcon/>}
                value={editReview.favorite}
                onChange={(e) => handleEditFormChange(e)} 
            />
            <Button 
                type='submit'
            > Save 
            </Button>
            <Button
                onClick={handleCancelEditClick}
            > Cancel 
            </Button>
        </Box>
    )
}

export default EditReview;