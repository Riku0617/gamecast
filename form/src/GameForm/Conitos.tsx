import React from 'react'
import { UseFormRegister } from 'react-hook-form'
import { Game, TeamList } from './Alies'

type Props = {
    register :UseFormRegister<Game>
    teamList:TeamList[]
    value: Game
}

const Conitos:React.FC<Props> = ({register,teamList,value}) => {
    return (
    <div>

        <div className="mx-2 mt-2"><h5>First Receiving Team</h5></div>
        <select {...register("cointos_result",{ setValueAs: (value) => Boolean(value), })} className="col-10 col-sm-3">
            <option value="true">{value.hometeam}</option>
            <option value="">{value.awayteam}</option>
        </select>
    </div>
    )
  }

export default Conitos
