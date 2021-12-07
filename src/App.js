import './App.css';
import React, { useState } from 'react';
import Container from '@mui/material/Container';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Cell } from './components/Cell';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import UndoIcon from '@mui/icons-material/Undo';

function App() {
  const [color, setColor] = useState('blue');
  const [gameTable, setGameTable] = useState([null, null, null, null, null, null, null, null, null]);
  const [history, setHistory] = useState([]);

  function changeTurn() {
    setColor(color==='blue'? 'red':'blue');
  }

  function chooseCell(i) {
    let newHistory = history.slice();
    newHistory.push(gameTable)
    setHistory(newHistory);

    let newGameTable = gameTable.slice();
    newGameTable[i] = color;
    setGameTable(newGameTable);
    changeTurn();
  }

  function undo() {
    if (history.length > 0) {
      let newHistory = history.slice();
      setGameTable(newHistory.pop());
      setHistory(newHistory);
      changeTurn();
    }
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

          <Grid item xs={4}> <Button className={'btn-' + color} onClick={() => undo()}>
          <UndoIcon fontSize='small'/> Undo
          </Button> </Grid>

          <Grid item xs={4}> <div id='label-turn'>
            <p><b>{color==='blue'?'Blue':'Red'}</b></p>
          </div> </Grid>

          <Grid item xs={4}> <Button className={'btn-' + color}>
            <AddCircleIcon fontSize='small'/> New Game
          </Button> </Grid>
        </Grid>

        <Footer />
      </Container>
    </div>
  );
}

export default App;
