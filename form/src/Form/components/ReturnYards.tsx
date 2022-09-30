import React from 'react'
import { Props2 } from './Alies';



const ReturnYards:React.FC<Props2> = ({register,value})  => {
    if (value.o_or_k ==="Punt" || value.o_or_k === "Kick Off"){
        return (
          <>
          <div className="mx-2 "><h5>Return Yards</h5></div>
             <input type="number" {...register("return_yards",{ setValueAs: (value) => parseInt(value), })} className="col-10 col-sm-3"/>
          </>
        )
      }
      return null   
}

export default ReturnYards
