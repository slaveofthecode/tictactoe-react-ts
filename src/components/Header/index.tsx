type Props = {
  isGameOver: boolean
}

const index = ({ isGameOver }: Props) => {
  return (
    <h1
    className={`${isGameOver ? 'game-over' : ''}`}
    >
      Tic Tac Toe
    </h1>
  )
}

export default index