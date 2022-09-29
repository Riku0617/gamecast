import React from 'react'
import { Props } from './Alies';


const OorK:React.FC<Props> = ({register}) => {

  return (
    <>
        <div className="mx-2 "><h5>O or K</h5></div>
        <select {...register("o_or_k")} className="col-10 col-sm-3">
            <option value="-">-</option>
            <option value="Kick Off">Kick Off</option>
            <option value="Offense">Offense</option>
            <option value="Punt">Punt</option>
            <option value="FG">FG</option>
            {/* <option value="TFP1">TFP(1P)</option>
            <option value="TFP2">TFP(2P)</option> */}
        </select>
    </>
  )
}

export default OorK
