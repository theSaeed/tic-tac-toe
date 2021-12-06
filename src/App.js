import './App.css';
import React, { useState } from 'react';
import Container from '@mui/material/Container';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

function App() {
  const [color, setColor] = useState('blue')

  return (
    <div className={"App bg-dark-" + color + " light-" + color}>
      <Container maxWidth="sm">
        <Header />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
