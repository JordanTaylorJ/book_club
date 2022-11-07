import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

const ListReview = ({review, user, handleDelete, handleEditReviewId}) => {

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
            (<Button value={review.id} onClick={(e) => handleDelete(e)}>
                x
            </Button>) 
            : <></>}
            <Button onClick={(e) => handleEditReviewId(e, review)}>Edit</Button>
        </ListItem>
        <Divider component="ul"/>
        </>
    )
}

export default ListReview; 