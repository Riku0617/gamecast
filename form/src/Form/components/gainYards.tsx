import React from 'react'
import { Props2 } from './Alies';



const GainYards:React.FC<Props2> = ({register,value}) => {

  if ((value.o_or_k === "Offense" && value.play_type === "Run") || (value.o_or_k === "Offense" && (value.pass_iscomplete === "Complete" || value.pass_iscomplete === "Sacked")) ){
    return (
      <>
      <div className="mx-2 "><h5>Yards Gained</h5></div>
          <input type="number" {...register("yards_gained",{ setValueAs: (value) => parseInt(value), })} className="col-10 col-sm-3"/>
      </>
    )
    
  }
  return null
}

export default GainYards
