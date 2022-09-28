import React from 'react'
import { Play } from '../Alies'

const KickOff: React.FC<{value:Play}> = ({value})  => {
    if (value.o_or_k==="Kick Off"){
        return (
            <div>
              {value.kicker} kicks {value.kick_distance} yds from {value.ball_place} {value.ball_on}. {value.returner} to {value.ball_place_result} {value.ball_on_result} for {value.return_yards} yds.
            </div>
          )
    }
  return null
}

export default KickOff
