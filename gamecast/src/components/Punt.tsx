import React from 'react'
import { Play } from '../Alies'

const Punt: React.FC<{value:Play}> = ({value}) => {
    if (value.o_or_k==="Punt"){
        return (
          <>
            <h4>
            {value.down} & {value.distance} at {value.ball_place} {value.ball_on}
            </h4>
            <div>
              {value.kicker} punts {value.punt_distance}. {value.returner} for {value.return_yards} yds to {value.ball_place_result} {value.ball_on_result}.
            </div>
          </>
          )
    }
  return null
}

export default Punt
