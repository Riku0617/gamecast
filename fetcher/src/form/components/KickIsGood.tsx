import React from 'react'
import { Props2 } from './Alies';


const KickIsGood:React.FC<Props2> = ({register,value})  => {
    if (value.o_or_k === "FG"){
        return (
          <>
              <div className="mx-2 mt-2"><h5>Kick is Good</h5></div>
                  <select {...register("kick_isgood")} className="col-10 col-sm-3">
                      <option value="">-</option>
                      <option value="Good">Good</option>
                      <option value="No Good">No Good</option>
                  </select>
          </>
        )
      }
      return null   
}

export default KickIsGood
