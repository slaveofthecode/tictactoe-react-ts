import { PLAYER } from "../../enum";

type Props = {
    currentPlayer: string
}

const index = ({ currentPlayer }: Props) => {
  return (
    <footer>
        <div className="players">
            {
                Object.values(PLAYER).map((p)=>{
                    return (
                        <span 
                            className={`${currentPlayer === p && 'currentPlayer'}`}
                        >
                            {p}    
                        </span>
                    )
                })
            }
        </div>
    </footer>
  )
}

export default index