import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PaletteIcon from '@mui/icons-material/Palette';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClickTheme = theme => {
    const html = document.querySelector('#jmui');

    console.log('html: ', html);
    html.setAttribute('data-mode', `${theme}`);

    handleClose();
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className="hover:bg-transparent"
      >
        <PaletteIcon className="fill-gray-600 hover:fill-black" />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button'
        }}
      >
        <MenuItem onClick={() => handleClickTheme('light')}>
          <WbSunnyIcon className="w-5 h-5 mr-1" /> Tema claro
        </MenuItem>
        <MenuItem onClick={() => handleClickTheme('dark')}>
          <DarkModeIcon className="w-5 h-5 mr-1" />
          Tema Oscuro
        </MenuItem>
      </Menu>
    </div>
  );
}
