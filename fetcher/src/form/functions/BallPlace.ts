import React from 'react'
import { Play } from '../Alies'

const BallPlace = (data:Play,ballPlace:boolean,ballPlaceResult:boolean) => {
    console.log(ballPlaceResult,"FInal")

    if (ballPlace){
        data.ball_place = "KC"
    }else{
        data.ball_place = "LAC"
    }

    if (ballPlaceResult){
        data.ball_place_result = "KC"
    }else{
        data.ball_place_result = "LAC"
    }

  return null
}

export default BallPlace
