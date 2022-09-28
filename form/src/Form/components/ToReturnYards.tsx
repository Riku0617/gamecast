import React from 'react'
import { Props2 } from './Alies';

const ToReturnYards:React.FC<Props2> = ({register,value})  => {
  
    if (value.result==="Fumble" || value.pass_iscomplete==="Interception"){
        return (
          <>
          <div className="mx-2 "><h5>Turn Over Return Yards</h5></div>
             <input type="number" {...register("to_return_yards",{ setValueAs: (value) => parseInt(value), })} className="col-10 col-sm-3"/>
          </>
        )
      }
      return null   
}

export default ToReturnYards
