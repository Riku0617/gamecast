import React from 'react'
import { Props2 } from './Alies';


const KickResult:React.FC<Props2> = ({register,value})  => {
    if (value.o_or_k === "Punt" || value.o_or_k === "Kick Off"){
        return (
          <>
              <div className="mx-2 mt-2"><h5>Kick Result</h5></div>
                    <select {...register("kick_result")} className="col-10 col-sm-3">
                        <option value="-">-</option>
                        <option value="TD">TD</option>
                        <option value="Fumble">Fumble</option>
                        <option value="Down">Down</option>
                        <option value="TB">Touch Back</option>
                    </select>
          </>
        )
      }
      return null   
}

export default KickResult
