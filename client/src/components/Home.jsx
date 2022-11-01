import React from 'react';

const Home = ({user}) => {

    return(
        <>
        <p>Home</p>
        <p>Welcome {user.username}</p>
        </>
    )
}

export default Home;