import React from 'react'
import { Play } from '../Alies'

type Props = {
    data:Play
    ballPossession:boolean
    setBallPossession:React.Dispatch<React.SetStateAction<boolean>>
    setId:React.Dispatch<React.SetStateAction<number>>
    setDown:React.Dispatch<React.SetStateAction<number>>
    setDistance:React.Dispatch<React.SetStateAction<number>>
}

const EndMakeDrive:React.FC<Props> = ({data,ballPossession,setBallPossession,setId,setDown,setDistance}) => {

    if (data.o_or_k==="Punt"){
        setBallPossession(!ballPossession)
    }
    
    setId(prevId => prevId + 1)
    
    fetch("http://localhost:9091/drives",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify({})
        }).then(() => {
                console.log("drive") 
        })
    setDown(1);
    setDistance(10);

  return null
}

export default EndMakeDrive

// PossessionTeamを変える
// DriveIdの更新
// 新しいDriveをポストする