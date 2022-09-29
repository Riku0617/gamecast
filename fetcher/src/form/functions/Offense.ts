import React from 'react'
import { Play } from '../Alies'
import {EndMakeDrive,DownDistance,SetYards} from './EntryPoint'

type Props = {
    data:Play
    setBallOn:React.Dispatch<React.SetStateAction<number>>
    ballOn:number
    ballPossession:boolean
    ballPlace:boolean
    state : {
        BallPlaceResult:boolean
    }
    setBallPlace:React.Dispatch<React.SetStateAction<boolean>>
    down:number
    distance:number
    setBallPossession:React.Dispatch<React.SetStateAction<boolean>>
    setId:React.Dispatch<React.SetStateAction<number>>
    setDown:React.Dispatch<React.SetStateAction<number>>
    setDistance:React.Dispatch<React.SetStateAction<number>>
}

const Offense:React.FC<Props> = ({data,ballPlace,state,ballPossession,setBallOn,ballOn,setBallPlace,down,distance,setBallPossession,setId,setDown,setDistance}) => {

    var gainYards = data.yards_gained
    SetYards({data,ballPossession,ballPlace,ballOn,gainYards,setBallOn,setBallPlace,state})

    if (data.o_or_k == "Offense"){
        if(down === 4 && distance > data.yards_gained){
            EndMakeDrive({data,ballPossession,setBallPossession,setId,setDown,setDistance})
            setBallPossession(!ballPossession)
            console.log("Gamble failed")
        }else{
            DownDistance({data,distance,setDown,down,setDistance})
        }
    }
  return null
}

export default Offense
