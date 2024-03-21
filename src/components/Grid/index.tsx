import Button from '../common/Button'

type Props = {
    grid: string[][],
    handleOnClick: (r: number, c: number) => void
}

const index = ({ grid, handleOnClick} : Props) => {
  return (
    <div>
        {
          grid.map((row: string[],indexRow: number ) => {
            return row.map( (cell, indexCol)=> (
                <Button 
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

{/* <button 
                key={`${indexRow}${indexCol}`} 
                className="cell" 
                onClick={()=>handleOnClick(indexRow,indexCol)} 
                disabled={!!cell}
              >
                {cell}
              </button> */}