import React from 'react';
import { Container } from '@mui/material';

import Header from './components/organismos/Header';

import './css/theme.css';
import './css/index.css';
import './css/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Container maxWidth="xl">Mi Contenido</Container>
    </div>
  );
}

export default App;
