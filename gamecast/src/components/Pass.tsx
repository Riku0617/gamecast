import React from 'react'
import { Play } from '../Alies'

const Pass: React.FC<{value:Play}> = ({value}) => {
    if (value.play_type==="Pass" && value.o_or_k=="Offense"){
        return (
          <>
            <h4>
              {value.down} & {value.distance} at {value.ball_place} {value.ball_on}
            </h4>
            <div>
              {value.passer} pass {value.pass_iscomplete} to {value.reciever} for {value.yards_gained} yds.
            </div>
          </>
          )
    }
  return null
}


export default Pass
