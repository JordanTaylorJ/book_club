import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import UserProfile from './components/UserProfile';
import Books from './components/Books';
import NewBook from './components/NewBook';
import BookReviews from './components/BookReviews';
import CreateReview from './components/CreateReview';
import {ThemeProvider, createTheme } from '@mui/material/styles';

function App() {

  const [user, setUser] = useState('')
  const [books, setBooks] = useState([]);

  const theme = createTheme({
    palette: {
      primary: {
        main: '#6da9bf',
      },
      secondary: {
        main: '#6da9bf',
        dark: '#324d57', 
      },
      text:{
        primary: "#000000"
      },
    },
    components: {
      MuiButton: {
            color: '#324d57',
            fontFamily: 'Arial'
      }
    }
  });

  useEffect(() => { 
    fetch('/auth')
    .then(res => {
      if (res.ok){
        res.json().then(currentUser => setUser(currentUser))
      }
    })
  }, []);

  useEffect(() => {
    fetch('/books/show')
    .then(r => r.json())
    .then(r => setBooks(r))
  }, []);

  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Navbar user={user} setUser={setUser} /> 
      <Routes>
        <Route path='/' element={<Home user={user}/>} />
        <Route path='/login' element={<Login setUser={setUser}/>} />
        <Route path='/signup' element={<Signup setUser={setUser}/>} />
        <Route path='/userprofile' element={<UserProfile user={user}/>} />
        <Route path='/books' element={<Books books={books}/>} />
        <Route path='/newbook' element={<NewBook books={books} setBooks={setBooks} />} />
        <Route path='/bookreviews' element={<BookReviews books={books}/>} />
        <Route path='/createreview' element={<CreateReview books={books}/>} />
      </Routes>
    </Router>
    </ThemeProvider>
  );
}

export default App;
