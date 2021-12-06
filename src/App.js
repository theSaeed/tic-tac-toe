import './App.css';
import React, { useState } from 'react';
import Container from '@mui/material/Container';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Cell } from './components/Cell';
import Grid from '@mui/material/Grid';

function App() {
  const [color, setColor] = useState('blue');
  const [gameTable, setGameTable] = useState([null, null, null, null, null, null, null, null, null]);
  
  function chooseCell(i) {
    let newGameTable = gameTable.slice();
    newGameTable[i] = color;
    setGameTable(newGameTable);
    setColor(color==='blue'? 'red':'blue');
  }

  var cells = [];
  for (var i = 0; i < 9; i++) {
    cells.push(<Cell key={i} color={color} value={gameTable[i]} i={i} onClick={chooseCell}/>);
  }

  return (
    <div className={"App bg-dark-" + color + " light-" + color}>
      <Container maxWidth="xs">
        <Header />

        <Grid container spacing={1}>
          {cells}
        </Grid>

        <Footer />
      </Container>
    </div>
  );
}

export default App;
