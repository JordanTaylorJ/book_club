import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';


const Navbar = ({user, setUser}) => {

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => setUser(""))
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component={Link} to=''
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Arial',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Book Club 
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
                component={Link} to='/books'
            >Books
            </Button>
            <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
                component={Link} to='/newbook'
            >New Book
            </Button> 
          </Box>
          { user ? (
            <Button
                onClick={handleLogout}
                sx={{ my: 2, color: 'white', display: 'block' }}
            > Logout
            </Button>
            ) : (
              <Button
              component={Link} to='/login'
              sx={{ my: 2, color: 'white', display: 'block' }}
          > Login
          </Button>
            )}
            {!user ? (
            <Button
                component={Link} to='/signup'
                sx={{ my: 2, color: 'white', display: 'block' }}
            >
            Signup
            </Button>
            ) : <></>}
          <Box sx={{ flexGrow: 0 }}>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;