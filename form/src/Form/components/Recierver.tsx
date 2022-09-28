import React from 'react'
import {  Props3 } from './Alies';


const Recierver:React.FC<Props3> = ({register,value,homeTeamData})=> {
    console.log(homeTeamData?.Positions,"ff")

    const playerList = homeTeamData?.Positions.map((position)=>
      position.Athletes.map((athlete)=>
      <option value={athlete.full_name}>{athlete.full_name}</option>))

    if(value.play_type === "Pass" && value.pass_iscomplete === "Complete"){
        return (
          <>
              <div className="mx-2 mt-2"><h5>Reciever</h5></div>
                  <select {...register("reciever")} className="col-10 col-sm-3">
                      <option value="-">-</option>
                      {playerList}
                  </select>
          </>
        )
      }
      return null
    
      
    }


export default Recierver
