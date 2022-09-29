import React from 'react'

import { Props, Props3 } from './Alies';

const Tackler:React.FC<Props3> = ({register,value,homeTeamData,awayTeamData,ballPossession}) => {

  const homePlayerList = homeTeamData?.DefensePositions.map((position)=>
        position?.DefenseAthletes.map((athlete)=>
      <option value={athlete.full_name}>{athlete.jersey} {athlete.full_name}</option>
      ))

  const awayPlayerList = awayTeamData?.DefensePositions.map((position)=>
      position?.DefenseAthletes.map((athlete)=>
      <option value={athlete.full_name}>{athlete.jersey} {athlete.full_name}</option>
    ))
      if (!ballPossession){
        return (
          <>
              <div className="mx-2 mt-2"><h5>Tackler</h5></div>
                  <select {...register("tackler")} className="col-10 col-sm-3">
                    <option key={0} value="-">-</option>
                    {homePlayerList}
                  </select>
          </>
        )
      }else{
        return (
          <>
              <div className="mx-2 mt-2"><h5>Tackler</h5></div>
                  <select {...register("tackler")} className="col-10 col-sm-3">
                    <option key={0} value="-">-</option>
                    {awayPlayerList}
                  </select>
          </>
        )
      }

  return null
}


export default Tackler
