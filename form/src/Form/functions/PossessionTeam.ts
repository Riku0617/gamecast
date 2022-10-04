import React from 'react'
import { Game } from '../../GameForm/Alies'
import { Play } from '../Alies'

const PossessionTeam = (data:Play,ballPossession:boolean,homeTeam:string,awayTeam:string) => {
    if (ballPossession){
        data.ball_possession = homeTeam
    }else{
        data.ball_possession = awayTeam
    }
}

export default PossessionTeam
