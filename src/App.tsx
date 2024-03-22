/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react';
import './App.scss';
import Alert from './components/Alert';
import Footer from './components/Footer';
import Grid from './components/Grid';
import Header from './components/Header';
import { PLAYER } from './enum';
import useGrid from './hooks/useGrid';
import useWinner from './hooks/useWinner';

const FIRST_PLAYER = Math.round(Math.random()) ? PLAYER.X : PLAYER.X;

function App() {

  const { grid, setGrid } = useGrid();
  const { winner, validate, setWinner } = useWinner();
  
  const [ turn, setTurn] = useState(FIRST_PLAYER);
  
  const handleOnClick = (indexRow:number, indexCol:number) => {    
    setTurn( t => t === PLAYER.X ? PLAYER.O : PLAYER.X);

    const clonGrid = grid;
    clonGrid[indexRow][indexCol] = turn;  
    setGrid(clonGrid);

    validate.isWinner(clonGrid);
  }

  const onClickUnMontedAlert = () => {
    setGrid([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
    setWinner(null);
  }

  return (
    <>
      <Header />
      <Grid 
        grid={grid} 
        handleOnClick={handleOnClick} 
        isGameOver={!!winner || grid.every( row => row.every( cell => cell !== ''))}
      />
      <Footer currentPlayer={turn} />
      {
        winner 
          ? <Alert 
              mainText={winner} 
              subText={'winner!'} 
              onClickUnMonted={onClickUnMontedAlert}
            />
          : grid.every( row => row.every( cell => cell !== ''))
            && <Alert 
                  mainText={`${PLAYER.X}${PLAYER.O}`} 
                  subText={'draw'} 
                  onClickUnMonted={onClickUnMontedAlert}
                /> 
            
      }
    </>
  )
}

export default App
