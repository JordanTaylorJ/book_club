import React from "react";
import Login from './Login';

const UserProfile = ({user}) => {

    if (!user) {
        return(
            <Login/>
        )
    } else{
        return(
            <div class='center'>
                <h1>Profile</h1>
                <ul>Username: {user.username}</ul>
                <p>favorited books in here !</p>
                
            </div>
        )
    }
}

export default UserProfile; 