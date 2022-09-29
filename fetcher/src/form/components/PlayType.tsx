import React from 'react'
import { Props2 } from './Alies';



const PlayType:React.FC<Props2> = ({register,value}) => {

  if (value.o_or_k === "Offense"){
    return (
      <>
          <div className="mx-2 mt-2"><h5>Play Type</h5></div>
              <select {...register("play_type")} className="col-10 col-sm-3">
                  <option value="-">-</option>
                  <option value="Run">Run</option>
                  <option value="Pass">Pass</option>
              </select>
      </>
    )
  }

  return null
}

export default PlayType
