/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";

type Props = {
    mainText: string,
    subText: string
}

const Alert = ({ mainText, subText}: Props) => {

  const [ show, setShow ] = useState<boolean>(!!mainText);

  if (!show) return null;

  if (show)
    return (
      <div className="alert-container" onClick={()=>setShow(false)}>
          <span>{ mainText }</span>
          <strong>{ subText }</strong> 
      </div>
    );
}

export default Alert