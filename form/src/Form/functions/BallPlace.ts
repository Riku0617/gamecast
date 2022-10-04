import React from 'react'
import { Game } from '../../GameForm/Alies'
import { Play } from '../Alies'


const BallPlace = (data:Play,ballPlace:boolean,ballPlaceResult:boolean,homeTeam:string,awayTeam:string) => {
    console.log(ballPlaceResult,"FInal")

    if (ballPlace){
        data.ball_place = homeTeam
    }else{
        data.ball_place = awayTeam
    }
    if (ballPlaceResult){
        data.ball_place_result = homeTeam
    }else{
        data.ball_place_result = awayTeam
    }
  return null
}

export default BallPlace
