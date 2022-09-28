import React from 'react'
import { Game } from '../../GameForm/Alies'
import { Play } from '../Alies'

const BallPlace = (data:Play,ballPlace:boolean,ballPlaceResult:boolean,gameData:Game[]) => {
    console.log(ballPlaceResult,"FInal")

    if (ballPlace){
        data.ball_place = gameData[0].hometeam
    }else{
        data.ball_place = gameData[0].awayteam
    }
    if (ballPlaceResult){
        data.ball_place_result = gameData[0].hometeam
    }else{
        data.ball_place_result = gameData[0].awayteam
    }
  return null
}

export default BallPlace
