import React from 'react'
import { UseFormRegister } from 'react-hook-form'
import { Game, GameTeams, TeamList } from './Alies'
import Index from './Index'


type Props = {
    register :UseFormRegister<Game>
    teamList:TeamList[]
}
const HomeTeam:React.FC<Props> = ({register,teamList}) => {

    const teamNames = teamList.map((name,Index) =>
      <option key={Index} value={name.team_name}>{name.team_name}</option>)

    return (
    <div>
        <div className="mx-2 mt-2"><h5>Home Team</h5></div>
        <select key={0} {...register("hometeam")} className="col-10 col-sm-3">
            {teamNames}
        </select>
    </div>
    )
}

export default HomeTeam
