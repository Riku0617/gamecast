import React from 'react'
import {  Props3 } from './Alies';


const Recierver:React.FC<Props3> = ({register,value,homeTeamData,awayTeamData,ballPossession})=> {
    console.log(homeTeamData?.OffensePositions,"ff")

    const homePlayerList = homeTeamData?.OffensePositions.map((position)=>
        position?.OffenseAthletes.map((athlete)=>
      // {position.position_name==="Wide Receiver" &&
      <option value={athlete.full_name}>{athlete.jersey} {athlete.full_name}</option>
      // }
      ))
    const aPlayerList = homeTeamData?.OffensePositions.map((position)=>
      position?.OffenseAthletes.map((athlete)=>
    // {position.PositionName==="Wide Receiver"? 
      console.log(position.position_name)
    // }
    ))
      
      // position.Offense  map((athlete)=>
      // <option value={athlete.full_name}>{athlete.jersey}</option>))

    const awayPlayerList = awayTeamData?.OffensePositions.map((position)=>
      position?.OffenseAthletes.map((athlete)=>
      <option value={athlete.full_name}>{athlete.jersey} {athlete.full_name}</option>
    ))

    if(value.play_type === "Pass" && value.pass_iscomplete === "Complete"){
      if (ballPossession){
        return (
          <>
              <div className="mx-2 mt-2"><h5>Reciever</h5></div>
                  <select {...register("reciever")} className="col-10 col-sm-3">
                    <option key={0} value="-">-</option>
                    {homePlayerList}
                  </select>
          </>
        )
      }else{
        return (
          <>
              <div className="mx-2 mt-2"><h5>Reciever</h5></div>
                  <select {...register("reciever")} className="col-10 col-sm-3">
                    <option key={0} value="-">-</option>
                    {awayPlayerList}
                  </select>
          </>
        )
      }
      }
      return null     
    }
export default Recierver
