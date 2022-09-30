import React from 'react'
import { Play } from '../Alies'
import SetYards from './SetYards'

type Props =  {
    data:Play
    setBallOn:React.Dispatch<React.SetStateAction<number>>
    ballOn:number
    ballPossession:boolean
    ballPlace:boolean
    setBallPlace:React.Dispatch<React.SetStateAction<boolean>>
    setBallPossession:React.Dispatch<React.SetStateAction<boolean>>
    state : {
        BallPlaceResult:boolean
    }
}

const KickOff:React.FC<Props> = ({data,ballOn,ballPossession,setBallOn,setBallPossession,ballPlace,setBallPlace,state}) => {

    if(data.kick_result==="TB"){
        setBallOn(20)
        data.ball_on_result = 20
        setBallPlace(!ballPlace)
        state.BallPlaceResult = !state.BallPlaceResult
        setBallPossession(!ballPossession)
    }else{
        var gainYards = data.kick_distance - data.return_yards
        SetYards({data,ballPossession,ballPlace,ballOn,gainYards,setBallOn,setBallPlace,state})
        setBallPossession(!ballPossession)
    }  
  return null
}


export default KickOff
// OutOfVBOundsの設定はできてない