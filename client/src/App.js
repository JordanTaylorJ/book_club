import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './components/Login';


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

  return (
    <Router>
      <Navbar user={user} setUser={setUser} /> 
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login setUser={setUser}/>} />
      </Routes>
    </Router>
  );
}

export default App;
