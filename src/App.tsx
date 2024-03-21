import { useState } from 'react';
import './App.scss';
import Alert from './components/Alert';
import Grid from './components/Grid';
import Header from './components/Header';
import useGrid from './hooks/useGrid';

// const INIT_GRID = [
//   ['', '', ''],
//   ['', '', ''],
//   ['', '', '']
// ]

function App() {

  // const [grid, setGrid] = useState(INIT_GRID);
  const { grid, setGrid } = useGrid();

  const [ turn, setTurn] = useState('X');
  const [ winner, setWinner ] = useState<string|null>(null);

  const handleOnClick = (indexRow:number, indexCol:number) => {    
    setTurn( t => t === 'X' ? 'O' : 'X');

    const clonGrid = grid;
    clonGrid[indexRow][indexCol] = turn;  
    setGrid(clonGrid);

    validateWinner();

  }

  function validateWinner() {
      const validationInline = () => {
        let result = false;        

        for (let i = 0; i < 3; i++) {
          if ( !result && grid[i][0] !== '') {
            result = grid[i][0] === grid[i][1] && grid[i][1] === grid[i][2]
            result && setWinner(grid[i][0]);
          }
        }
        
        return result;
      }

      const validateBlock = () => {
        let result = false; 
        
        for (let i = 0; i < 3; i++) {
          if ( !result && grid[0][i] !== '') {
            result = grid[0][i] === grid[1][i] && grid[1][i] === grid[2][i]             
            result && setWinner(grid[0][i]);
          }
        }

        return result;
      }

      const validateDiagonal = () => {
        let result = false;

        if ( grid[1][1] !== '') {
          const val = grid[1][1];

          result = val === grid[0][0] && val === grid[2][2] ||
                   val === grid[2][0] && val === grid[0][2]

          result && setWinner(val);            
        }

        return result;
      }

      return validationInline() || validateBlock() || validateDiagonal();
    
  }

  return (
    <>
      <Header />
      <Grid grid={grid} handleOnClick={handleOnClick} />
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
