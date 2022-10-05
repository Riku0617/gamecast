import React from 'react'
import { Play } from '../Alies'
import {EndMakeDrive,DownDistance,SetYards} from './EntryPoint'

type Props = {
    data:Play
    setBallOn:React.Dispatch<React.SetStateAction<number>>
    ballOn:number
    ballPossession:boolean
    homeTeam:string
    awayTeam:string
    ballPlace:boolean
    state : {
        BallPlaceResult:boolean
    }
    setBallPlace:React.Dispatch<React.SetStateAction<boolean>>
    down:number
    distance:number
    setBallPossession:React.Dispatch<React.SetStateAction<boolean>>
    setDriveId:React.Dispatch<React.SetStateAction<number>>
    setDown:React.Dispatch<React.SetStateAction<number>>
    setDistance:React.Dispatch<React.SetStateAction<number>>
    setPlayAmount:React.Dispatch<React.SetStateAction<number>>
    setYardsDrived:React.Dispatch<React.SetStateAction<number>>
}

const Offense:React.FC<Props> = ({data,ballPlace,state,ballPossession,homeTeam,awayTeam,setBallOn,ballOn,setBallPlace,down,distance,setBallPossession,setDriveId,setDown,setDistance,setPlayAmount,setYardsDrived}) => {

    //なんでこれやったんだろう
    var gainYards = data.yards_gained
    SetYards({data,ballPossession,ballPlace,ballOn,gainYards,setBallOn,setBallPlace,state})

    if (data.o_or_k == "Offense"){
        if(down === 4 && distance > data.yards_gained){
            EndMakeDrive({data,ballPossession,homeTeam,awayTeam,setBallPossession,setDriveId,setDown,setDistance,setPlayAmount,setYardsDrived})
            setBallPossession(!ballPossession)
        }else{
            DownDistance({data,distance,setDown,down,setDistance})
        }
    }
  return null
}

export default Offense
