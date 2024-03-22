/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";

type Props = {
    mainText: string,
    subText: string
    onClickUnMonted: () => void
}

const Alert = ({ mainText, subText, onClickUnMonted}: Props) => {

  const [ show, setShow ] = useState<boolean>(!!mainText);

  if (!show) return null;

  if (show)
    return (
      <div 
        className={`alert-container ${subText !== 'draw' && 'winner'}`} 
        onClick={()=> {
          setShow(false);
          onClickUnMonted();        
        }}
      >
          <span>{ mainText }</span>
          <strong>{ subText }</strong> 
      </div>
    );
}

export default Alert