import React from 'react'
import { Play } from '../Alies'

const FG: React.FC<{value:Play}> = ({value}) => {
    if (value.o_or_k==="FG"){
        return (
            <div>
              {value.kicker} {value.yards_gained} fieldGaol is {value.kick_isgood}.
            </div>
          )
    }
  return null
}

export default FG
