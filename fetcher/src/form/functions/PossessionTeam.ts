import React from 'react'
import { Play } from '../Alies'

const PossessionTeam = (data:Play,ballPossession:boolean) => {
    if (ballPossession){
        data.ball_possession = "KC"
    }else{
        data.ball_possession = "LAC"
    }
}

export default PossessionTeam
