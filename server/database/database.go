package database

import (
	"fmt"
	models "server/models"

	_ "github.com/go-sql-driver/mysql"
	"github.com/jinzhu/gorm"
)

// Databaseに接続

func Db() *gorm.DB {
	const DB_USERNAME = "root"
	const DB_PASSWORD = "password"
	const DB_NAME = "gamecast"
	const DB_HOST = "127.0.0.1"
	const DB_PORT = "3306"

	var err error
	dsn := DB_USERNAME + ":" + DB_PASSWORD + "@tcp" + "(" + DB_HOST + ":" + DB_PORT + ")/" + DB_NAME + "?" + "parseTime=true&loc=Local"
	fmt.Println("dsn : ", dsn)
	db, err := gorm.Open("mysql", dsn)

	if err != nil {
		fmt.Println("Error connecting to database")
	}

	db.AutoMigrate(&models.Game{})
	db.AutoMigrate(&models.Drive{})
	db.AutoMigrate(&models.Play{})
	db.AutoMigrate(&models.TeamInfo{})
	db.AutoMigrate(&models.Position{})
	db.AutoMigrate(&models.Athlete{})
	// db.AutoMigrate(&models.OffensePosition{})
	// db.AutoMigrate(&models.DefensePosition{})
	// db.AutoMigrate(&models.KickingPosition{})
	// db.AutoMigrate(&models.OffenseAthlete{})
	// db.AutoMigrate(&models.KickingAthlete{})
	// db.AutoMigrate(&models.DefenseAthlete{})

	//ポイント１
	db.Model(&models.Drive{}).AddForeignKey("game_id", "games(game_id)", "CASCADE", "CASCADE")
	db.Model(&models.Play{}).AddForeignKey("drive_id", "drives(drive_id)", "CASCADE", "CASCADE")
	db.Model(&models.Position{}).AddForeignKey("teaminfo_id", "teaminfos(teaminfo_id)", "CASCADE", "CASCADE")
	db.Model(&models.Athlete{}).AddForeignKey("position_id", "positions(position_id)", "CASCADE", "CASCADE")
	// db.Model(&models.DefenseAthlete{}).AddForeignKey("position_id", "defensepositions(position_id)", "CASCADE", "CASCADE")
	// db.Model(&models.OffenseAthlete{}).AddForeignKey("position_id", "offensepositions(position_id)", "CASCADE", "CASCADE")
	// db.Model(&models.KickingAthlete{}).AddForeignKey("position_id", "kickingpositions(position_id)", "CASCADE", "CASCADE")

	return db
}
