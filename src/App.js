import './App.css';
import React, { useState } from 'react';
import Container from '@mui/material/Container';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Cell } from './components/Cell';
import Grid from '@mui/material/Grid';

function App() {
  const [color, setColor] = useState('blue')

  return (
    <div className={"App bg-dark-" + color + " light-" + color}>
      <Container maxWidth="xs">
        <Header />

        <Grid container spacing={1}>
          <Cell color={color} />
          <Cell color={color} />
          <Cell color={color} />
          <Cell color={color} />
          <Cell color={color} />
          <Cell color={color} />
          <Cell color={color} />
          <Cell color={color} />
          <Cell color={color} />
        </Grid>
        {/* <button onClick={() => setColor(color=='blue'? 'red':'blue')} >Change Color</button> */}
        <Footer />
      </Container>
    </div>
  );
}

export default App;
