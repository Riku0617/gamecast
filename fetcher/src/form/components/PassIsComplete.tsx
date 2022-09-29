import React from 'react'
import { Props2 } from './Alies';



const PassIsComplete:React.FC<Props2> = ({register,value})  => {
    if (value.play_type === "Pass" && value.o_or_k === "Offense"){
        return (
          <>
              <div className="mx-2 mt-2"><h5>Completed or Not</h5></div>
                  <select {...register("pass_iscomplete")} className="col-10 col-sm-3">
                      <option value="">-</option>
                      <option value="Complete">Complete</option>
                      <option value="Incomplete">Incomplete</option>
                      <option value="Interception">Interception</option>
                  </select>
          </>
        )
      }
      return null   
}

export default PassIsComplete
