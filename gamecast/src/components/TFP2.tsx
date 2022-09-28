import React from 'react'
import { Play } from '../Alies'

const TFP2 : React.FC<{value:Play}> = ({value})  => {
    if (value.o_or_k==="Run"){
        return (
            <div>
              {value.carrier} run for {value.yards_gained} yards for {value.result}
            </div>
          )
    }
    if (value.play_type==="Pass"){
        return (
            <div>
              {value.passer} pass {value.pass_iscomplete} to {value.reciever} for {value.yards_gained} yds for {value.result}
            </div>
          )
    }
  return null
}

export default TFP2
