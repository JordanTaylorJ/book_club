import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

const Books = () => {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('/books/show')
    .then(r => r.json())
    .then(r => setBooks(r))
  }, []);

  console.log(books)

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
        ))}
      </ImageList>
      </Box> 
    );
  } else {
    return(<h1>Loading</h1>)
  }
}

export default Books; 
//?w=248&fit=crop&auto=format
//?w=248&fit=crop&auto=format&dpr=2 2x