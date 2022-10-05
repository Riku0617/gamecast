import React, { Dispatch } from 'react'
import { Play } from '../Alies'

type Props = {
  data: Play
  distance:number
  setDown:React.Dispatch<React.SetStateAction<number>>
  down:number
  setDistance:React.Dispatch<React.SetStateAction<number>>
}

const DownDistance:React.FC<Props> = ({data,distance,setDown,down,setDistance}) => {
  
  if(distance > data.yards_gained){
    if (down != 4){
      setDistance(distance - data.yards_gained)
      setDown(prevDown => prevDown + 1)
      data.down_result = down + 1
      data.distance_result = distance - data.yards_gained
    }
  }else{
    setDistance(10);
    setDown(1)
    data.down_result = 1
    data.distance_result = 10
  }

  return null
}

export default DownDistance
