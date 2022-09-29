import React from 'react'
import { TeamList } from '../Alies'

type Props = {
    teamList:TeamList[]
}

const SetTeams:React.FC<Props> = ({teamList}) => {
    console.log(teamList)
    const teamNames = teamList.map((name) =>
    // Correct! Key should be specified inside the array.
      <option value="{teamname.team_name}">{name.team_name}</option>)
  return (
    <><div>
          <div className="mx-2 mt-2"><h5>Home Team</h5></div>
          <select className="col-10 col-sm-3">
              {teamNames}
          </select>
      </div>
      <div>
        <div className="mx-2 mt-2"><h5>Away Team</h5></div>
        <select className="col-10 col-sm-3">
            {teamNames}
        </select>
    </div></>
  )
}

export default SetTeams
