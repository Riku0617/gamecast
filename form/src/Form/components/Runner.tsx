import React from 'react'
import { Props2, Props3 } from './Alies';


const Runner:React.FC<Props3> = ({register,value,homeTeamData,awayTeamData,ballPossession}) => {

  const homePlayerList = homeTeamData?.OffensePositions?.map((position)=>
        position?.OffenseAthletes?.map((athlete,index)=>
      <option key={index} value={athlete.full_name}>{athlete.jersey} {athlete.full_name}</option>
      ))

    const awayPlayerList = awayTeamData?.OffensePositions?.map((position)=>
      position?.OffenseAthletes?.map((athlete,index)=>
      <option key={index} value={athlete.full_name}>{athlete.jersey} {athlete.full_name}</option>
    ))

    console.log(ballPossession,"Carrier")
    console.log(homeTeamData,"hometeam data")
    console.log(awayTeamData,"awayteam data")
    console.log(awayPlayerList)

    if(value.play_type === "Run" && value.o_or_k === "Offense"){
      if (ballPossession){
        console.log("home Team Ball")
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
        console.log("away Team Ball")
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
