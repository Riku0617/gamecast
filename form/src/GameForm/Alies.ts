import { Drive } from "../Form/Alies"

export type TeamList = {
	id           :number
    CreatedAt:  string
    DeletedAt: string | null
    ID: number
    OffensePositions: OffensePosition[]
    DefensePositions: DefensePosition[]
    KickingPositions: KickingPosition[]
    UpdatedAt: string
    team_name: string
}

export type OffensePosition = {
	id           :number
    teaminfo_id     :number
	position_name   :string 
	OffenseAthletes    :OffenseAthlete[]
}
export type DefensePosition = {
	id             :number
    teaminfo_id     :number
	position_name    :string 
	DefenseAthletes :DefenseAthlete[]
}
export type KickingPosition = {
	id           :number
    teaminfo_id     :number
	position_name    :string 
	KickingAthletes       :KickingAthlete[]
}

export type OffenseAthlete = {
	id           :number
    position_id  :number 
	athlete_url  :string 
	full_name    :string 
	jersey      :string 
}
export type DefenseAthlete = {
	id           :number
    position_id  :number 
	athlete_url  :string 
	full_name    :string 
	jersey      :string 
}
export type KickingAthlete = {
	id           :number
    position_id  :number 
	athlete_url  :string 
	full_name    :string 
	jersey      :string 
}

export type Game = {
	id           :number
	hometeam:string
	awayteam:string 
	hometeam_score:number
    awayteam_score:number
	cointos_result:boolean
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