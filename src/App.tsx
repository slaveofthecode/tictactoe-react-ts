import { useState } from 'react';
import './App.scss';

function App() {
  const [grid, setGrid] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ]);

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
      <h1>Tic Tac Toe</h1>
      <div>
        {
          grid.map((row,indexRow ) => {
            return row.map( (cell, indexCol)=> (
              <button 
                key={`${indexRow}${indexCol}`} 
                className="cell" 
                onClick={()=>handleOnClick(indexRow,indexCol)} 
                disabled={!!cell}
              >
                {cell}
              </button>
            ))
          })
        }
      </div>

      {
        winner && (<div>          
          <h1> 
            { winner } 
          </h1>         
          <strong>winner!👏🏻</strong> 
        </div>)
      }

      {        
        !winner && grid.every( row => row.every( cell => cell !== '')) && (
          <div>
            <h1> 
              <span>XO</span>
              <strong>Draw</strong> 
            </h1>
          </div>
        )
      }
    </>
  )
}

export default App
