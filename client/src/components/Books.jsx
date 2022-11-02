import React, {useState, useEffect} from 'react';
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
      <ImageList sx={{ width: 900, height: 600 }}>
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
    );
  } else {
    return(<h1>Loading</h1>)
  }
}

export default Books; 
//?w=248&fit=crop&auto=format
//?w=248&fit=crop&auto=format&dpr=2 2x