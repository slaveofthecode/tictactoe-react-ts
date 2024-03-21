import { useState } from 'react';
import './App.scss';
import Alert from './components/Alert';
import Grid from './components/Grid';
import Header from './components/Header';
import useGrid from './hooks/useGrid';
import useWinner from './hooks/useWinner';

function App() {

  const { grid, setGrid } = useGrid();
  const { winner, validate } = useWinner();

  const [ turn, setTurn] = useState('X');

  const handleOnClick = (indexRow:number, indexCol:number) => {    
    setTurn( t => t === 'X' ? 'O' : 'X');

    const clonGrid = grid;
    clonGrid[indexRow][indexCol] = turn;  
    setGrid(clonGrid);

    validate.isWinner(clonGrid);
  }

  return (
    <>
      <Header />
        <Grid 
          grid={grid} 
          handleOnClick={handleOnClick} 
          isGameFinished={ 
            !!winner || 
            grid.every( row => row.every( cell => cell !== ''))
          }
        />
        {
          winner 
            ? <Alert mainText={winner} subText={'winner!'} />
            : grid.every( row => row.every( cell => cell !== ''))
              && <Alert mainText={'XO'} subText={'draw'} /> 
              
        }
    </>
  )
}

export default App
