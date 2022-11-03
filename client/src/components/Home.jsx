import React from 'react';

const Home = ({user}) => {

    /*
    const homeStyle = {
        backgroundImage: 'url("https://images.unsplash.com/photo-1656699089515-fb33eb1c2431?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")',
        height:'100vh',
        marginTop:'-70px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }
    */

    if (!user){
        return(
            <div> 
                <h1>Currently Reading:</h1>
                <h1>Login to Join!</h1>  
            </div>
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