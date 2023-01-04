import React from 'react';
import { Button } from '@mui/material';
import { Boton } from './components/atomos/Boton';
import './css/App.css';

function App() {
  return (
    <div className="App my-0 mx-auto p-8 max-w-screen-xl text-center">
      <h1 className="text-4xl uppercase text-indigo-500 mb-4">
        Portfolio Jose María Ocaña
      </h1>
      <Button variant="contained" className="bg-black">
        Botón MUI con tailwind
      </Button>
      <Boton primary>Botón JmocanaUI con tailwind y theme</Boton>
    </div>
  );
}

export default App;
