import React from 'react'

type TeamInfp = {
  CreatedAt:  string
  DeletedAt: string | null
  ID: number
  Positions: null 
  UpdatedAt: string
  team_name: string
}
type Props = {
    teamList:TeamInfp[]
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
