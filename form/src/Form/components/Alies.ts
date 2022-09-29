import {useForm, UseFormRegister} from "react-hook-form"
import { TeamList } from "../../GameForm/Alies"
import { Play } from "../Alies"


export type Props = {
    register :UseFormRegister<Play>
}

export type Props2 = Props & {
    value: Play
}
export type Props3 = Props2 & {
    homeTeamData: TeamList
    awayTeamData: TeamList
    ballPossession:boolean
}
export{}