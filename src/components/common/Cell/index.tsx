import styles from './style.module.scss';

type Props = {
    id: string,
    onClick : () => void,
    text: string
}

const index = ({ id, onClick, text }: Props) => {
  return (
    <>
        <button
            id={id} 
            className={styles.cell}
            onClick={onClick} 
            disabled={!!text}
        >
            {text}
        </button>
    </>
  )
}

export default index