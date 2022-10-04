import { Props2, Props3 } from './Alies';



const Kicker:React.FC<Props3> = ({register,value,homeTeamData,awayTeamData,ballPossession}) => {

  const homePlayerList = homeTeamData?.KickingPositions?.map((position)=>
        position?.KickingAthletes?.map((athlete)=>
      <option value={athlete.full_name}>{athlete.jersey} {athlete.full_name}</option>
      ))

  const awayPlayerList = awayTeamData?.KickingPositions?.map((position)=>
      position?.KickingAthletes?.map((athlete)=>
      <option value={athlete.full_name}>{athlete.jersey} {athlete.full_name}</option>
    ))

    if(value.o_or_k === "Kick Off" || value.o_or_k==="FG"){
      if (ballPossession){
        return (
          <>
              <div className="mx-2 mt-2"><h5>Kicker</h5></div>
                  <select {...register("kicker")} className="col-10 col-sm-3">
                    <option key={0} value="-">-</option>
                    {homePlayerList}
                  </select>
          </>
        )
      }else{
        return (
          <>
              <div className="mx-2 mt-2"><h5>Kicker</h5></div>
                  <select {...register("kicker")} className="col-10 col-sm-3">
                    <option key={0} value="-">-</option>
                    {awayPlayerList}
                  </select>
          </>
        )
      }
    }
  return null
}

export default Kicker
