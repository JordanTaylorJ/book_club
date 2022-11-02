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

function App() {

  const [user, setUser] = useState('')

  useEffect(() => { 
    fetch('/auth')
    .then(res => {
      if (res.ok){
        res.json().then(currentUser => setUser(currentUser))
      }
    })
  }, []);

  console.log('user', user)

  return (
    <Router>
      <Navbar user={user} setUser={setUser} /> 
      <Routes>
        <Route path='/' element={<Home user={user}/>} />
        <Route path='/login' element={<Login setUser={setUser}/>} />
        <Route path='/signup' element={<Signup setUser={setUser}/>} />
        <Route path='/userprofile' element={<UserProfile user={user}/>} />
        <Route path='/books' element={<Books user={user}/>} />
        <Route path='/newbook' element={<NewBook user={user}/>} />
      </Routes>
    </Router>
  );
}

export default App;
