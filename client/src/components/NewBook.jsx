import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const NewBook = ({books, setBooks, user}) => {

    const [newBook, setNewBook] = useState({
        title: "",
        author: "",
        image: ""
    });
    const [errors, setErrors] = useState([]);

    const handleChange = (e) => {
        const value = e.target.value 
        const name = e.target.name 
        setNewBook({...newBook, [name]:value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newBook)
        })
        .then((r) => {
            if (r.ok) {
                r.json().then(r => handleAddBook(r))
                setErrors([])
            } else {
                r.json().then((r) => setErrors(r.error))
            }
        })
    }

    const handleAddBook = (newBook) => {
        const newBooks = [newBook, ...books]
        setBooks(newBooks)
        setNewBook({
            title: "",
            author: "",
            image: ""
        })
    }

    return(
        <div class='center'>
        {user ?
        <>
        <h1>Add a New Book</h1>
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
            label="Title" 
            variant="standard" 
            type='text'
            name='title'
            value={newBook.title}
            onChange={(e) => handleChange(e)} 
        />
        <TextField 
            id="standard-basic" 
            label="Author" 
            variant="standard" 
            type="text"
            name='author'
            value={newBook.author}
            onChange={(e) => handleChange(e)} 
        />
        <TextField 
            id="standard-basic" 
            label="Image Address" 
            variant="standard" 
            type="text"
            name='image'
            value={newBook.image}
            onChange={(e) => handleChange(e)} 
        />
        <Button
            type='submit' 
            value="submit"
        >
            Add Book
        </Button>
        <br/>
        </Box>
        {errors.map((error) => 
            <p>{error}</p>
        )}
        </>
        : <h2>Login to share your books!</h2> }
        </div>
    )
}

export default NewBook;