
type Props = {
    mainText: string,
    subText: string
}

const index = ({ mainText, subText}: Props) => {
  return (
    <div>
        <span>{ mainText }</span>
        <strong>{ subText }</strong> 
    </div>
  )
}

export default index