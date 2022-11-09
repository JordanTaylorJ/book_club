import React from "react";
import Login from './Login';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Button from '@mui/material/Button';

const UserProfile = ({user}) => {

    user.books.map(book => console.log(book.title))

    if (!user) {
        return(
            <Login/>
        )
    } else{
        return(
            <div class='center'>
                
                <Box sx={{ 
                    position: 'absolute', 
                    left: '50%', 
                    top: '55%',
                    transform: 'translate(-50%, -50%)', 
                    width: 950, 
                    height: 650 }}
                >
                <h1>{user.username}'s Favorite Books</h1>
                <ImageList variant="masonry" cols={3} gap={8}> 
                {user.books.map((book) => {
                    return(
                        <ImageListItem key={book.id}>
                        <img
                          src={`${book.image}`}
                          srcSet={`${book.image}`}
                          alt={book.title}
                          loading="lazy"
                        />
                        <ImageListItemBar
                          title={book.title}
                          subtitle={<span>by: {book.author}</span>}
                          position="below"
                        />
                      </ImageListItem>
                    )
                })}
                </ImageList>
                </Box> 
            </div>
        )
    }
}

export default UserProfile; 