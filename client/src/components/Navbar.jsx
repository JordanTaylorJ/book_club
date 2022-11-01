import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {

    return(
        <>
            <p>Navbar !</p>
            <button component={Link} to='/login'>
                Login
            </button>
        </>
    )
}

export default Navbar;