import { Drive } from "../Form/Alies"

export type TeamList = {
    CreatedAt:  string
    DeletedAt: string | null
    ID: number
    Positions: Position[]
    UpdatedAt: string
    team_name: string
}

export type Position = {
    TeamInfoID     :number
	PositionName   :string 
	Athletes       :Athlete[]
}

export type Athlete = {
    position_id  :number 
	athlete_url  :string 
	full_name    :string 
	jersey      :string 
}

export type Game = {
	hometeam:string
	awayteam:string 
	hometeam_score:number
    awayteam_score:number
	// HomeTeamPossession int
	// AwayTeamPossession int
	// PassingYards int
	// FirstDowna int
	// TotalDrives int
	// PassAttempts int
	// Completepasses int
	// IntThrown int
	// RushingYards int
	// RushAttempts int
	// TurnOvers int
	Drives:Drive[] 
}

export type GameTeams = {
    hometeam:string
	awayteam:string 
}