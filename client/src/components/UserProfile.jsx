import React from "react";
import Login from './Login';
//import Button from '@mui/material/Button';
//import {Link} from 'react-router-dom';

const UserProfile = ({user}) => {

    if (!user) {
        return(
            <Login/>
        )
    } else{
        return(
            <>
                <br/>
                <h1>Profile</h1>
                <ul>Username: {user.username}</ul>
                
            </>

        )
    }
}

export default UserProfile; 

/*
<Button component={Link} to='/edituser'>Change Password</Button>
                <br/>
                <Button component={Link} to='/deleteaccount'>Delete Account</Button>
*/