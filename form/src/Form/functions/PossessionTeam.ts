import React from 'react'
import { Game } from '../../GameForm/Alies'
import { Play } from '../Alies'

const PossessionTeam = (data:Play,ballPossession:boolean,gameData:Game[]) => {
    if (ballPossession){
        data.ball_possession = gameData[0].hometeam
    }else{
        data.ball_possession = gameData[0].awayteam
    }
}

export default PossessionTeam
