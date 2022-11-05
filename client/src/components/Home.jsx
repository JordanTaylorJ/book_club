import React from 'react';
import Box from '@mui/material/Box';

const Home = ({user, books}) => {


    if (books.length > 0 && !user){
        return(
            <Box sx={{ 
                position: 'absolute', 
                left: '50%', 
                top: '55%',
                transform: 'translate(-50%, -50%)', 
                width: 650, 
                height: 650, 
                }}
            >
            <h1>Login to Join!</h1>  
            <h1>{`Currently Reading: ${books[1].title}`}</h1>
                <div class="box box2" >
                    <img
                        src={books[0].image}
                        alt={books[0].title}
                    />
                </div>
            </Box>
        )
    } else if (books.length  > 0) {
        return(
            <Box sx={{ 
                position: 'absolute', 
                left: '50%', 
                top: '55%',
                transform: 'translate(-50%, -50%)', 
                width: 650, 
                height: 650, 
                }}
            >
            <h1>Welcome {user.username}!</h1>
            <h1>Currently Reading:{books[1].title}</h1>
            <div class="box box2" >
                <img
                    src={books[0].image}
                    alt={books[0].title}
                />
            </div>
            </Box>
        )
    } else {
        return(<h1>Loading</h1>)
    }
}

export default Home;