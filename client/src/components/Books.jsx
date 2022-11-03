import React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

const Books = ({books}) => {
  
  let navigate = useNavigate();
  const routeChange = (e) => {
    let path = `/bookreviews`
    console.log('e.target.value', e.target.value)
    console.log('e.target.id', e.target.id)
    navigate(path, { state: { id: e.target.id } } );
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
          <ImageListItem 
            key={book.id} 
            >
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
            <Button
              id={book.id}
              value={book.title}
              onClick={(e) => routeChange(e)}
            >
              Reviews
            </Button>
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

//?w=248&fit=crop&auto=format&dpr=2 2x
//?w=248&fit=crop&auto=format