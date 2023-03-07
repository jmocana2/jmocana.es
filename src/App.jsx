import React from 'react';
import { Container } from '@mui/material';

// Organismos
import Header from './components/organismos/Header';

// Moléculas
import Skill from './components/moleculas/Skill';

// CSS
import './css/theme.css';
import './css/index.css';
import './css/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Container maxWidth="xl">
        <Skill />
      </Container>
    </div>
  );
}

export default App;
