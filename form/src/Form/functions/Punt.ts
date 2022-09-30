import React from 'react'
import { Play } from '../Alies'
import SetYards from './SetYards'


type Props =  {
    data:Play
    setBallOn:React.Dispatch<React.SetStateAction<number>>
    ballOn:number
    ballPlace:boolean
    setBallPlace:React.Dispatch<React.SetStateAction<boolean>>
    state : {
        BallPlaceResult:boolean
    }
    ballPossession:boolean
}


const Punt:React.FC<Props> = ({data,ballOn,setBallOn,ballPlace,setBallPlace,state,ballPossession}) => {

    if(data.kick_result==="TB"){
        setBallOn(20)
        data.ball_on_result = 20
    }
    else{
        var gainYards = data.punt_distance - data.return_yards
        SetYards({data,ballPossession,ballPlace,ballOn,gainYards,setBallOn,setBallPlace,state})
    }
  return null
}

export default Punt


function ballPossession(ballPossession: any, ballPlace: boolean, ballOn: number, arg3: number, setBallOn: React.Dispatch<React.SetStateAction<number>>, setBallPlace: React.Dispatch<React.SetStateAction<boolean>>) {
    throw new Error('Function not implemented.')
}
// ボール持ってるチームが変わる
// ボールの場所が変わる
// TBなら20yds
// Returnnなら、Ballon＋Punt_distance)-return_yards
// あるいは　100 - (Ballon＋Punt_distance)-return_yards)