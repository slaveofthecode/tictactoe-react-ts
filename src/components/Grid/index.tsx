import Cell from '../common/Cell';

type Props = {
    grid: string[][],
    handleOnClick: (r: number, c: number) => void,
    isGameFinished: boolean
}

const index = ({ grid, handleOnClick, isGameFinished} : Props) => {
  return (
    <div className={`${isGameFinished ? 'blur' : ''}`} >
        {
          grid.map((row: string[],indexRow: number ) => {
            return row.map( (cell, indexCol)=> (
                <Cell 
                    key={`${indexRow}${indexCol}`}
                    id={`${indexRow}${indexCol}`}
                    text={cell}
                    onClick={()=>handleOnClick(indexRow,indexCol)}
                />
            ))
          })
        }
      </div>
  )
}

export default index