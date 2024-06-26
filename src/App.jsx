import React from 'react';
import { Container } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme/themeMaterial';

// Organismos
import Header from './components/organismos/Header';
import Skill from './components/organismos/Skill';
import LatestWorks from './components/organismos/LatestWorks';

// CSS
import './css/theme.css';
import './css/index.css';
import './css/App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Container maxWidth="xl" sx={{ marginBottom: '50px' }}>
          <Skill />
        </Container>
        <Container
          maxWidth={false}
          sx={{ backgroundColor: 'primary.main', padding: '30px 10px' }}
        >
          <Container maxWidth="xl">
            <LatestWorks />
          </Container>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
