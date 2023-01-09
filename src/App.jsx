import React from 'react';
import { Container } from '@mui/material';

import Menu from './components/moleculas/Menu/';

import './css/theme.css';
import './css/index.css';
import './css/App.css';

function App() {
  return (
    <div className="App">
      <Menu />
      <Container maxWidth="xl">Mi Contenido</Container>
    </div>
  );
}

export default App;
