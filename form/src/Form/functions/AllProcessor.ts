import React from 'react'
import { Game } from '../../GameForm/Alies'
import { Play } from '../Alies'
import { PossessionTeam,BallPlace, Punt,EndMakeDrive, GetPoints,KickOff, InterceptionFunc,Offense } from './EntryPoint'


type Props = {
    data:Play
    homeTeam:string
    awayTeam:string
    ballPlace:boolean
    ballPossession:boolean
    ballOn:number
    down:number
    distance:number
    gameData: Game[]
    setPlayAmount:React.Dispatch<React.SetStateAction<number>>
    setYardsDrived:React.Dispatch<React.SetStateAction<number>>
    setBallPlace:React.Dispatch<React.SetStateAction<boolean>>
    setBallPossession:React.Dispatch<React.SetStateAction<boolean>>
    setBallOn:React.Dispatch<React.SetStateAction<number>>
    setDriveId:React.Dispatch<React.SetStateAction<number>>
    setDown:React.Dispatch<React.SetStateAction<number>>
    setDistance:React.Dispatch<React.SetStateAction<number>>
    setHomePoints:React.Dispatch<React.SetStateAction<number>>
    setAwayPoints:React.Dispatch<React.SetStateAction<number>>
}

const Allprocessor:React.FC<Props> = ({data,homeTeam,awayTeam,ballPlace,ballPossession,ballOn,down,distance,setPlayAmount,setYardsDrived, gameData,setBallPlace,setBallPossession,setBallOn,setDriveId,setDown,setDistance,setHomePoints,setAwayPoints}) => {

    var state = {
        BallPlaceResult:ballPlace
    }


    // BallOnのヤードに関して、Offenceでgainした時の処理
    if (data.o_or_k === "Offense"){
        Offense({data,ballPlace,state,ballPossession,homeTeam,awayTeam,setBallOn,ballOn,setBallPlace,down,distance,setBallPossession,setDriveId,setDown,setDistance,setPlayAmount,setYardsDrived})
    }
    

    // Puntの時の処理
    if (data.o_or_k === "Punt"){
        EndMakeDrive({data,ballPossession,homeTeam,awayTeam,setBallPossession,setDriveId,setDown,setDistance,setPlayAmount,setYardsDrived})
        Punt({data,ballOn,setBallOn,ballPlace,setBallPlace,state,ballPossession})
    }
    // FGの処理// TDの処理
    console.log(data.ball_on_result)
    if (data.kick_isgood === "Good" || data.ball_on_result<=0){
        GetPoints({data,ballPossession,setHomePoints,setAwayPoints,setBallOn})
        EndMakeDrive({data,ballPossession,homeTeam,awayTeam,setBallPossession,setDriveId,setDown,setDistance,setPlayAmount,setYardsDrived})
        setBallPlace(!ballPlace)
        console.log("Get Points")
    }else if(data.o_or_k==="FG" && data.kick_isgood==="No Good"){
        EndMakeDrive({data,ballPossession,homeTeam,awayTeam,setBallPossession,setDriveId,setDown,setDistance,setPlayAmount,setYardsDrived})
    }
    // Kick Off処理
    if (data.o_or_k ==="Kick Off"){
        KickOff({data,ballOn,ballPossession,setBallOn,setBallPossession,ballPlace,setBallPlace,state})
        // setBallPossession(!ballPossession)
    }

    // INTの処理//Fumbleの処理　=> TurnOver,BallPlace,interceptされた場所、FumbelRecoverされた場所,return_yards
    // INT=> Pass=>INT=>INT_PLACE=>RETURN_YARDS=>TURNOVER(BALLPOSSESSIONの変化)
    if (data.pass_iscomplete==="Interception" || data.result === "Fumble"){
        setBallPossession(!ballPossession)
        InterceptionFunc({data,ballPlace,ballPossession,setBallPlace,setBallPossession,setBallOn,state});
        EndMakeDrive({data,ballPossession,homeTeam,awayTeam,setBallPossession,setDriveId,setDown,setDistance,setPlayAmount,setYardsDrived})
    }

    // ボール保持チームが変わった時の処理
    PossessionTeam(data,ballPossession,homeTeam,awayTeam);

    // Ballがどちらの陣地にあるかに関する処理
    BallPlace(data,ballPlace,state.BallPlaceResult,homeTeam,awayTeam)
    
  return null
}

export default Allprocessor
