import React from 'react'
import { Props2, Props3 } from './Alies';


const Runner:React.FC<Props3> = ({register,value,homeTeamData,awayTeamData,ballPossession}) => {

  const homePlayerList = homeTeamData?.OffensePositions.map((position)=>
        position?.OffenseAthletes.map((athlete)=>
      <option value={athlete.full_name}>{athlete.jersey} {athlete.full_name}</option>
      ))

    const awayPlayerList = awayTeamData?.OffensePositions.map((position)=>
      position?.OffenseAthletes.map((athlete)=>
      <option value={athlete.full_name}>{athlete.jersey} {athlete.full_name}</option>
    ))

    if(value.play_type === "Run" && value.o_or_k === "Offense"){
      if (ballPossession){
        return (
          <>
              <div className="mx-2 mt-2"><h5>Carrier</h5></div>
                  <select {...register("carrier")} className="col-10 col-sm-3">
                    <option key={0} value="-">-</option>
                    {homePlayerList}
                  </select>
          </>
        )
      }else{
        return (
          <>
              <div className="mx-2 mt-2"><h5>Carrier</h5></div>
                  <select {...register("carrier")} className="col-10 col-sm-3">
                    <option key={0} value="-">-</option>
                    {awayPlayerList}
                  </select>
          </>
        )
      }
    }
  return null
}


export default Runner
