import React from 'react'
import { Play } from '../Alies'

type Props = {
    data:Play
    ballPossession:boolean
    homeTeam:string
    awayTeam:string
    setBallPossession:React.Dispatch<React.SetStateAction<boolean>>
    setDriveId:React.Dispatch<React.SetStateAction<number>>
    setDown:React.Dispatch<React.SetStateAction<number>>
    setDistance:React.Dispatch<React.SetStateAction<number>>
    setPlayAmount:React.Dispatch<React.SetStateAction<number>>
    setYardsDrived:React.Dispatch<React.SetStateAction<number>>
}

const EndMakeDrive:React.FC<Props> = ({data,ballPossession,homeTeam,awayTeam,setBallPossession,setDriveId,setDown,setDistance,setPlayAmount,setYardsDrived}) => {

    if (data.o_or_k==="Punt"){
        setBallPossession(!ballPossession)
    }
    
    setDriveId(prevId => prevId + 1)
    
    fetch("http://localhost:9091/drives",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify({
                ball_possession: ballPossession? homeTeam:awayTeam
            })
        }).then(() => {
                console.log("drive") 
        })
    setDown(1);
    setDistance(10);
    setPlayAmount(0);
    setYardsDrived(0);
    data.down = 1
    data.distance = 10
    data.ball_possession_bool = !ballPossession

  return null
}

export default EndMakeDrive

// PossessionTeamを変える
// DriveIdの更新
// 新しいDriveをポストする