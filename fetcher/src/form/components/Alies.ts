import {useForm, UseFormRegister} from "react-hook-form"
import { Play } from "../Alies"


export type Props = {
    register :UseFormRegister<Play>
}

export type Props2 = Props & {
    value: Play
}

export{}