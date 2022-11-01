import React from 'react';

const Home = ({user}) => {

    if (!user){
        return(
            <>
                <h1>Login to Join!</h1> 
            </>
        )
    } else {
        return(
            <>
                <h1>Welcome {user.username}!</h1>
            </>
        )
    }
}

export default Home;