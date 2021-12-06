import './App.css';
import React, { useState } from 'react';
import Container from '@mui/material/Container';

function App() {
  const [color, setColor] = useState('blue')

  return (
    <div className={"App bg-dark-" + color + " light-" + color}>
      <Container maxWidth="sm">
        <div id="title">
          <h1>Tic-Tac-Toe</h1>
        </div>

        <div id="footer">
          <p>Designed by <b>Saeed Ahmadnia</b></p>
          <p>December 2021</p>
        </div>
      </Container>
    </div>
  );
}

export default App;
