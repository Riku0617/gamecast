import React from 'react'
import { Props } from './Alies';

const BallTeam:React.FC<Props> = ({register}) => {

  return (
    <>
    <div className="mx-2 "><h5>Ball on Team</h5></div>
        <select {...register("ball_possession")} className="col-10 col-sm-3">
            <option value="-">-</option>
            <option value="Steelers">Steelers</option>
            <option value="Bengals">Bengals</option>
        </select>
    </>
  )
}

export default BallTeam
