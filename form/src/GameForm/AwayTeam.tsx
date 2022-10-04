import React from 'react'
import { UseFormRegister } from 'react-hook-form'
import { Game,GameTeams,TeamList } from './Alies'

type Props = {
    teamList:TeamList[]
    setAwayTeam:React.Dispatch<React.SetStateAction<string>>
}

const AwayTeam :React.FC<Props> = ({teamList,setAwayTeam}) => {

    const teamNames = teamList.map((name,Index) =>
      <option key={Index} value={name.team_name}>{name.team_name}</option>)

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setAwayTeam(e.target.value);
    }
    return (
    <div>
        <div className="mx-2 mt-2"><h5>Away Team</h5></div>
        <select onChange={(e) => handleChange(e)} className="col-10 col-sm-3">
            {teamNames}
        </select>
    </div>
    )
  }

export default AwayTeam
