import React from 'react'
import { Play } from '../Alies'

const Run: React.FC<{value:Play}> = ({value})=> {

    if (value.play_type==="Run" && value.o_or_k==="Offense"){
        if(value.result==="TOUCH DOWN"){
          return (
            <>
              <h4>
                {value.down} & {value.distance} at {value.ball_place} {value.ball_on}
              </h4>
              <div>
                {value.carrier} run for {value.yards_gained} yards to {value.ball_place_result} {value.ball_on_result},{value.result}.
              </div>
            </>
            )
        }
        return (
          <>
            <h4>
              {value.down} & {value.distance} at {value.ball_place} {value.ball_on}
            </h4>
            <div>
              {value.carrier} run for {value.yards_gained} yards to {value.ball_place_result} {value.ball_on_result}.
            </div>
          </>
          )
    }
  return null
}

export default Run