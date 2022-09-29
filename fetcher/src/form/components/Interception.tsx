import React from 'react'
import { Props2 } from './Alies';


const Interception:React.FC<Props2> = ({register,value}) => {
    if ((value.pass_iscomplete === "Interception" || (value.result === "Fumble" && value.play_type ==="Run")) && value.o_or_k === "Offense"){
      return (
        <>
            <div className="mx-2 mt-2"><h5>Turnover Place</h5></div>
            <select {...register("turnover_place",{ setValueAs: (value) => Boolean(value), })} className="col-10 col-sm-3">
                    <option value="true">KC</option>
                    <option value="">LAC</option>
            </select>
            <div className="mx-2 mt-2"><h5>Turnover Yards</h5></div>
            <input type="number" {...register("turnover_yards",{ setValueAs: (value) => parseInt(value), })} className="col-10 col-sm-3"/>
        </>
      )
    }
    return null
  }

export default Interception
