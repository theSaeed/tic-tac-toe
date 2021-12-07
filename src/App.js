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
import Backdrop from '@mui/material/Backdrop';

function App() {
  const [color, setColor] = useState('blue');
  const [gameTable, setGameTable] = useState([null, null, null, null, null, null, null, null, null]);
  const [history, setHistory] = useState([]);

  const [showWinner, setShowWinner] = useState(false);
  const [winnerColor, setWinnerColor] = useState('light-blue');
  const [winnerMsg, setWinnerMsg] = useState('BLUE WINS!');

  function changeTurn() {
    setColor(color==='blue'? 'red':'blue');
  }

  function closeWinner() {
    setShowWinner(false);
    newGame();
  }

  function checkColor(p, gameTable) {
    if (gameTable[0]===p && gameTable[3]===p && gameTable[6]===p)
      return true;
    if (gameTable[1]===p && gameTable[4]===p && gameTable[7]===p)
      return true;
    if (gameTable[2]===p && gameTable[5]===p && gameTable[8]===p)
      return true;

    if (gameTable[0]===p && gameTable[1]===p && gameTable[2]===p)
      return true;
    if (gameTable[3]===p && gameTable[4]===p && gameTable[5]===p)
      return true;
    if (gameTable[6]===p && gameTable[7]===p && gameTable[8]===p)
      return true;

    if (gameTable[0]===p && gameTable[4]===p && gameTable[8]===p)
      return true;
    if (gameTable[2]===p && gameTable[4]===p && gameTable[6]===p)
      return true;

    return false;
  }

  function isGameFinished(gameTable) {
    for (var i = 0; i < gameTable.length; i++) {
      if (gameTable[i] === null)
        return false;
    }
    return true;
  }

  function checkForWinner(gameTable) {
    if (checkColor('blue', gameTable)) {
      setWinnerMsg('BLUE WINS!');
      setWinnerColor('#007FFF');
      setShowWinner(true);
      return true;
    }
    if (checkColor('red', gameTable)) {
      setWinnerMsg('RED WINS!');
      setWinnerColor('#FF0055');
      setShowWinner(true);
      return true;
    }
    if (isGameFinished(gameTable)) {
      setWinnerMsg('DRAW!');
      setWinnerColor('#FFF');
      setShowWinner(true);
      return true;
    }
    return false;
  }

  function chooseCell(i) {
    let newHistory = [...history];
    newHistory.push(gameTable)
    setHistory(newHistory);

    let newGameTable = [...gameTable];
    newGameTable[i] = color;
    setGameTable(newGameTable);

    if (checkForWinner(newGameTable)) {
      return;
    }

    changeTurn();
  }

  function undo() {
    if (history.length > 0) {
      let newHistory = [...history];
      setGameTable(newHistory.pop());
      setHistory(newHistory);
      changeTurn();
    }
  }

  function newGame() {
    setColor('blue');
    setGameTable([null, null, null, null, null, null, null, null, null]);
    setHistory([]);
  }

  var cells = [];
  for (var i = 0; i < 9; i++) {
    cells.push(<Cell key={i} color={color} value={gameTable[i]} i={i} onClick={chooseCell}/>);
  }

  return (
    <div className={"App bg-dark-" + color + " light-" + color}>
      <Backdrop
        sx={{ color: winnerColor, zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={showWinner}
        onClick={() => closeWinner()}
      >
        <p style={{'font-size': '4em'}}>{winnerMsg}</p>
      </Backdrop>
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

          <Grid item xs={4}> <Button className={'btn-' + color} onClick={() => newGame()}>
            <AddCircleIcon fontSize='small'/> New Game
          </Button> </Grid>
        </Grid>

        <Footer />
      </Container>
    </div>
  );
}

export default App;
