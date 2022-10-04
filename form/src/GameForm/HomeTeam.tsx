import React from 'react'
import { UseFormRegister } from 'react-hook-form'
import { Game, GameTeams, TeamList } from './Alies'
import Index from './Index'


type Props = {
    teamList:TeamList[]
    setHomeTeam:React.Dispatch<React.SetStateAction<string>>
}
const HomeTeam:React.FC<Props> = ({teamList,setHomeTeam}) => {

    const teamNames = teamList.map((name,Index) =>
      <option key={Index} value={name.team_name}>{name.team_name}</option>)

    
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setHomeTeam(e.target.value);
    }

    return (
    <div>
        <div className="mx-2 mt-2"><h5>Home Team</h5></div>
        <select onChange={(e) => handleChange(e)} className="col-10 col-sm-3">
            {teamNames}
        </select>
    </div>
    )
}

export default HomeTeam
