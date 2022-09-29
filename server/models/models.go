package models

import "github.com/jinzhu/gorm"

type Game struct {
	gorm.Model
	HomeTeam      string `json:"hometeam"`
	AwayTeam      string `json:"awayteam"`
	HomeTeamScore int
	AwayTeamScore int
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
	Drives []Drive `gorm:"foreignKey:GameID"`
}

type Drive struct {
	gorm.Model
	GameID         int    `json:"game_id"`
	BallPossession string `json:"ball_possession"`
	AmountOfPlays  int    `json:"amount_of_play"`
	YardsDrived    int    `json:"yards_drived"`
	PossessionTime int    `json:"possession_time"`
	DriveResult    string `json:"drive_result"`
	PointsGained   int    `json:"points_gained"`
	Plays          []Play `gorm:"foreignKey:DriveID"`
}
type Play struct {
	gorm.Model
	DriveID         int    `json:"drive_id"`
	HomeTeam        string `json:"hometeam"`
	AwayTeam        string `json:"awayteam"`
	HomeTeamPoints  int    `json:"hometeam_points"`
	AwayTeamPoints  int    `json:"awayteam_points"`
	BallPossession  string `json:"ball_possession"`
	BallPlace       string `json:"ball_place"`
	BallPlaceResult string `json:"ball_place_result"`
	BallOn          int    `json:"ball_on"`
	BallOnResult    int    `json:"ball_on_result"`
	Down            int    `json:"down"`
	Distance        int    `json:"distance"`
	OffenseOrKick   string `json:"o_or_k"`
	PlayType        string `json:"play_type"`
	Passer          string `json:"passer"`
	Reciever        string `json:"reciever"`
	PassIsComplete  string `json:"pass_iscomplete"`
	TurnoverPlace   bool   `json:"turnover_place"`
	TurnoverYards   int    `json:"turnover_yards"`
	Carrier         string `json:"carrier"`
	Result          string `json:"result"`
	TOReturnYards   int    `json:"to_return_yards"`
	Tackler         string `json:"tackler"`
	YardsGained     int    `json:"yards_gained"`
	Kicker          string `json:"kicker"`
	KickDistance    int    `json:"kick_distance"`
	Punter          string `json:"punter"`
	PuntDistance    int    `json:"punt_distance"`
	Returner        string `json:"returner"`
	KickIsGood      string `json:"kick_isgood"`
	KickResult      string `json:"kick_result"`
	ReturnYards     int    `json:"return_yards"`
	YardsRecovered  int    `json:"yards_recovered"`
}

type TeamInfo struct {
	gorm.Model
	TeamName string `json:"team_name"`
	// Positions []Position
	OffensePositions []OffensePosition
	DefensePositions []DefensePosition
	KickingPositions []KickingPosition
}

type Position struct {
	gorm.Model
	TeamInfoID   uint   `json:"teaminfo_id"`
	PositionName string `json:"position_name"`
	Athletes     []Athlete
}

type Athlete struct {
	gorm.Model
	PositionID uint   `json:"position_id"`
	AthleteUrl string `json:"athlete_url"`
	FullName   string `json:"full_name"`
	Jersey     string `json:"jersey"`
}

type DefensePosition struct {
	gorm.Model
	TeamInfoID      uint   `json:"teaminfo_id"`
	PositionName    string `json:"position_name"`
	DefenseAthletes []DefenseAthlete
}

type KickingPosition struct {
	gorm.Model
	TeamInfoID      uint   `json:"teaminfo_id"`
	PositionName    string `json:"position_name"`
	KickingAthletes []KickingAthlete
}

type OffensePosition struct {
	gorm.Model
	TeamInfoID      uint   `json:"teaminfo_id"`
	PositionName    string `json:"position_name"`
	OffenseAthletes []OffenseAthlete
}

type DefenseAthlete struct {
	gorm.Model
	DefensePositionID uint   `json:"position_id"`
	AthleteUrl        string `json:"athlete_url"`
	FullName          string `json:"full_name"`
	Jersey            string `json:"jersey"`
}
type OffenseAthlete struct {
	gorm.Model
	OffensePositionID uint   `json:"position_id"`
	AthleteUrl        string `json:"athlete_url"`
	FullName          string `json:"full_name"`
	Jersey            string `json:"jersey"`
}
type KickingAthlete struct {
	gorm.Model
	KickingPositionID uint   `json:"position_id"`
	AthleteUrl        string `json:"athlete_url"`
	FullName          string `json:"full_name"`
	Jersey            string `json:"jersey"`
}
