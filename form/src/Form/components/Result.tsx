import React from 'react'
import { Props2 } from './Alies';


const Result:React.FC<Props2> = ({register,value}) => {

  if (value.o_or_k === "Offense"){
    return (
      <>
          <div className="mx-2 mt-2"><h5>Result</h5></div>
              <select {...register("result")} className="col-10 col-sm-3">
                  <option value="-">-</option>
                  <option value="Fresh">Fresh</option>
                  <option value="TD">TD</option>
                  <option value="Fumble">Fumble</option>

              </select>
      </>
    )
  }
  return null
}

export default Result
