import React from 'react'
import { Props2 } from './Alies';


const Runner:React.FC<Props2> = ({register,value}) => {

  if(value.play_type === "Run" && value.o_or_k === "Offense"){
    return (
      <>
          <div className="mx-2 mt-2"><h5>Carrier</h5></div>
              <select {...register("carrier")} className="col-10 col-sm-3">
                  <option value="-">-</option>
                  <option value="22">22</option>
                  <option value="30">30</option>
              </select>
      </>
    )
  }
  return null

  
}

export default Runner
