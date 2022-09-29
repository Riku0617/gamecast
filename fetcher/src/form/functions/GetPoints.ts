import React from 'react'
import { Play } from '../Alies'

type Props = {
    data:Play
    ballPossession :boolean
    setHomePoints :React.Dispatch<React.SetStateAction<number>>
    setAwayPoints :React.Dispatch<React.SetStateAction<number>>
    setBallOn :React.Dispatch<React.SetStateAction<number>>
}

const GetPoints:React.FC<Props> = ({data,ballPossession,setHomePoints,setAwayPoints,setBallOn}) => {
    if (data.kick_isgood === "Good"){
        if (ballPossession){
            setHomePoints(prevHomePoints => prevHomePoints + 3)
        }
        else{
            setAwayPoints(prevAwayPoints => prevAwayPoints + 3)
        }
        setBallOn(35)
        data.result = "Kick is Good"
    }
    else if (data.ball_on_result<=0){
        if (ballPossession){
            setHomePoints(prevHomePoints => prevHomePoints + 6)
        }
        else{
            setAwayPoints(prevAwayPoints => prevAwayPoints + 6)
        }
        setBallOn(35)
        data.result = "TOUCH DOWN"
    }


  return null
}

export default GetPoints
