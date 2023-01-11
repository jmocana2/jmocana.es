import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import AvatarJmui from '../../moleculas/AvatarJmui';
import ResponsiveAppBar from '../../moleculas/Menu';
import IconMenu from '../../moleculas/IconMenu';

function Header() {
  return (
    <AppBar
      position="static"
      className="bg-primary shadow-none ease-in duration-300"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AvatarJmui />
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <ResponsiveAppBar />
            <IconMenu />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
