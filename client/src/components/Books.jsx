import React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

const Books = ({books}) => {

  const handleImageClick = () => {
    console.log('something should be happening here eventuallyyyy')
  }

  if (books.length > 0){
    return (
      <Box sx={{ 
        position: 'absolute', 
        left: '50%', 
        top: '55%',
        transform: 'translate(-50%, -50%)', 
        width: 950, 
        height: 650, 
        overflowY: 'scroll' }}
      >
      <ImageList variant="masonry" cols={3} gap={8}>
          {books.map((book) => (
          <ImageListItem key={book.id}>
            <img
              src={`${book.image}?w=248&fit=crop&auto=format`}
              srcSet={`${book.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={book.title}
              loading="lazy"
              onClick={handleImageClick}
            />
            <ImageListItemBar
              title={book.title}
              subtitle={<span>by: {book.author}</span>}
              position="below"
            />
          </ImageListItem>
        ))}
      </ImageList>
      </Box> 
    );
  } else {
    return(<h1>Loading</h1>)
  }
}

export default Books; 