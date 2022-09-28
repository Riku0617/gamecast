import React from "react"
import { Play } from "../Alies"

type Props = {
    data:Play;
    ballPossession:boolean
    ballPlace:boolean
    ballOn:number
    gainYards:number
    setBallOn:React.Dispatch<React.SetStateAction<number>>
    setBallPlace:React.Dispatch<React.SetStateAction<boolean>>
    state : {
        BallPlaceResult:boolean
    }
}

const SetYards:React.FC<Props> = ({data,ballPossession,ballPlace,ballOn,gainYards,setBallOn,setBallPlace,state}) => {

    if (ballPossession && ballPlace){
        if (ballOn + gainYards <= 50){
            setBallOn(ballOn + gainYards)
            data.ball_on_result = ballOn + gainYards
        }else{
            setBallOn(100 - ballOn - gainYards)
            data.ball_on_result = 100 - ballOn - gainYards
            setBallPlace(!ballPlace)
            state.BallPlaceResult = !state.BallPlaceResult
        }
    }
    else if (ballPossession && (!ballPlace)){
        setBallOn(ballOn - gainYards)
        data.ball_on_result = ballOn - gainYards
    }else if ((!ballPossession) && ballPlace){
        setBallOn(ballOn - gainYards)
        data.ball_on_result = ballOn - gainYards
    }else{
        if (ballOn + gainYards <= 50){
            setBallOn(ballOn + gainYards)
            data.ball_on_result = ballOn + gainYards
        }else{
            setBallOn(100 - ballOn - gainYards)
            data.ball_on_result = 100 - ballOn - gainYards
            setBallPlace(!ballPlace)
            state.BallPlaceResult = !state.BallPlaceResult
        }
    }
  return null
}

export default SetYards
