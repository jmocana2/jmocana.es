import * as React from 'react';

/** mui */
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

/** moléculas */
import AvatarJmui from '../../moleculas/AvatarJmui';
import ResponsiveAppBar from '../../moleculas/Menu';
import IconMenu from '../../moleculas/IconMenu';
import Logo from '../../moleculas/Logo';
import RRSS from '../../moleculas/RRSS';
import AnimatedPhoto from '../../moleculas/AnimatedPhoto';

function Header() {
  return (
    <AppBar position="static" className="bg-white shadow-none mb-10">
      <div className="bg-primary ease-in duration-300">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AvatarJmui />
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <ResponsiveAppBar />
              <IconMenu />
            </Box>
          </Toolbar>
        </Container>
      </div>
      <Container maxWidth="xl" className="mt-4">
        <div className="flex justify-center">
          <Logo />
          <RRSS />
        </div>
        <AnimatedPhoto />
      </Container>
    </AppBar>
  );
}
export default Header;
