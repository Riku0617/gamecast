import React from 'react'
import { Play } from '../Alies'
import SetYards from './SetYards'

type Props = {
    data:Play
    ballPlace:boolean
    ballPossession:boolean
    setBallPlace:React.Dispatch<React.SetStateAction<boolean>>
    setBallPossession:React.Dispatch<React.SetStateAction<boolean>>
    setBallOn:React.Dispatch<React.SetStateAction<number>>
    state : {
        BallPlaceResult:boolean
    }
}

const Interception:React.FC<Props> = ({data,ballPlace,ballPossession,setBallPlace,setBallPossession,setBallOn,state}) => {
    console.log(ballPossession,ballPlace,0)
    // setBallPossession(!ballPossession)  //なんでこれだけできないのか
    // setBallPlace(data.turnover_place)
    // set関数は次レンダリング？されるまでは更新されない、から、その場での即時的な値の変化には不向きである。その場合は、変数を使ってしまう方がよい。
    if (ballPossession == true){ballPossession=false}
    else{ballPossession=true}
    ballPlace = data.turnover_place
    // setBallOn(data.turnover_yards)
    var gainYards = data.to_return_yards
    var ballOn = data.turnover_yards
    SetYards({data,ballPossession,ballPlace,ballOn,gainYards,setBallOn,setBallPlace,state})

    // if (ballPlace &&  ballPossession){
    //     if (data.turnover_yards + data.to_return_yards <= 50){
    //         setBallOn(data.turnover_yards + data.to_return_yards)
    //         data.ball_on_result = data.turnover_yards + data.to_return_yards
    //     }else{
    //         setBallOn(100 - data.turnover_yards - data.to_return_yards)
    //         data.ball_on_result = 100 - data.turnover_yards - data.to_return_yards
    //         setBallPlace(!ballPlace)
    //         state.BallPlaceResult = !state.BallPlaceResult
    //     }

    // }
    // else if ((!ballPlace) && ballPossession){
    //     setBallOn(data.turnover_yards - data.to_return_yards)
    //     data.ball_on_result = data.turnover_yards - data.to_return_yards
    // }
    // console.log(ballPossession,ballPlace,2)

    // if ((!ballPlace) && (!ballPossession)){
    //     if (data.turnover_yards + data.to_return_yards <= 50){
    //         setBallOn(data.turnover_yards + data.to_return_yards)
    //         data.ball_on_result = data.turnover_yards + data.to_return_yards
    //     }else{
    //         setBallOn(100 - data.turnover_yards -data.to_return_yards)
    //         data.ball_on_result = 100 - data.turnover_yards - data.to_return_yards
    //         setBallPlace(!ballPlace)
    //         state.BallPlaceResult = !state.BallPlaceResult
    //     }
    // }
    // else if (ballPlace && (!ballPossession)){
    //     setBallOn(prevBallOn => prevBallOn - data.to_return_yards)
    //     data.ball_on_result = data.turnover_yards - data.to_return_yards
    // }



  return null
}

export default Interception
