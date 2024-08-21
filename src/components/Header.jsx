import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Card from '@mui/material/Card';
import LoginPopup from './LoginPopUp';

const Header = () =>
{
  const [openLogin, setOpenLogin] = useState(false);

  const handleOpenLogin = () =>
  {
    setOpenLogin(true);
  };

  const handleCloseLogin = () =>
  {
    setOpenLogin(false);
  };
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar sx={{ backgroundColor: "#034078", position: "sticky" }}>
        <Toolbar>

          <Box sx={{ border: 0, display: 'flex', justifyContent: "center", flexGrow: 1, alignItems: 'center' }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography marginLeft={2} mr={5} variant="h6" >
              iGraft
            </Typography>
            <Typography marginLeft={5} mr={5} variant="h6" >
              Center
            </Typography>
            <Typography marginLeft={5} mr={5} variant="h6" >
              Center
            </Typography>
            <Typography marginLeft={5} mr={5} variant="h6" >
              About Us
            </Typography>


          </Box>



          <Button alignitems="right" color="inherit" onClick={handleOpenLogin}>Login</Button>
        </Toolbar>
      </AppBar>
      <LoginPopup open={openLogin} onClose={handleCloseLogin} />
    </Box >

  );
}

export default Header;