import React from 'react';
import Box from '@mui/material/Box';

const Home = ({user, books}) => {


    if (books.length > 0 && !user){
        return(
            <div> 
                <Box sx={{ 
                    position: 'absolute', 
                    left: '50%', 
                    top: '55%',
                    transform: 'translate(-50%, -50%)', 
                    width: 950, 
                    height: 650, 
                    }}
                >
                <h1>{`Currently Reading: ${books[1].title}`}</h1>
                <img
                    src={books[1].image}
                    alt={books[1].title}
                />
                <h1>Login to Join!</h1>  
                </Box>
            </div>
        )
    } else if (books.length  > 0) {
        return(
            <>
                <h1>Welcome {user.username}!</h1>
                <h1>Currently Reading:{books[1].title}</h1>
                <img
                    src={books[1].image}
                    alt={books[1].title}
                />
            </>
        )
    } else {
        return(<h1>Loading</h1>)
    }
}

export default Home;