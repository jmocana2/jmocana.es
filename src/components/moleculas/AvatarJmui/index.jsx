import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

const AvatarJmui = () => {
  return (
    <Box sx={{ flexGrow: 1, display: 'flex' }}>
      <Avatar
        className="bg-secondary text-gray-600 mr-2 ease-in duration-300"
        alt="José María Ocaña"
        src="/static/images/avatar/2.jpg"
      />
      <Typography
        className="text-gray-600 mt-1"
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          display: { xs: 'flex' },
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none'
        }}
      >
        JMUI
      </Typography>
    </Box>
  );
};

export default AvatarJmui;
