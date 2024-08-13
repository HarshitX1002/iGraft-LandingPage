import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Card from '@mui/material/Card';

function Header()
{
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ position: "static" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography display={'flex'} justifyContent={'center'} variant="h6" component="div" sx={{ flexGrow: 1 }}>
            iGraft
            <Typography marginLeft="1" variant="h6" component="div">
              Center
            </Typography>
            <Typography variant="h6" component="div">
              Center
            </Typography>
            <Typography variant="h6" component="div">
              Center
            </Typography>
          </Typography>



          <Button alignitems="right" color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Card>

      </Card>
    </Box>

  );
}

export default Header;