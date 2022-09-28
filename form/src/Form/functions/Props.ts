import { Play } from "../Alies"

export type Props = {
    data:Play
    setBallOn:React.Dispatch<React.SetStateAction<number>>
    ballOn:number
    ballPossession:boolean
    ballPlace:boolean
    state : {
        BallPlaceResult:boolean
    }
    setBallPlace:React.Dispatch<React.SetStateAction<boolean>>
}