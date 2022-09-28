import React from 'react'
import { UseFormRegister } from 'react-hook-form'
import { Game, GameTeams, TeamList } from './Alies'


type Props = {
    register :UseFormRegister<Game>
    teamList:TeamList[]
}
const HomeTeam:React.FC<Props> = ({register,teamList}) => {

    const teamNames = teamList.map((name) =>
      <option value={name.team_name}>{name.team_name}</option>)

    return (
    <div>
        <div className="mx-2 mt-2"><h5>Home Team</h5></div>
        <select {...register("hometeam")} className="col-10 col-sm-3">
            {teamNames}
        </select>
    </div>
    )
}

export default HomeTeam
