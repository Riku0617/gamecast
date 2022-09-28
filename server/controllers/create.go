package controllers

import (
	"fmt"
	"server/database"
	"server/models"

	"log"
	"net/http"

	"github.com/gin-gonic/gin"
)

func PostGame(c *gin.Context) {
	db := database.Db()
	var game models.Game
	c.BindJSON(&game)
	result := db.Create(&game)

	if result.Error != nil {
		log.Fatal(result.Error)
		fmt.Println("CANNOT POST!")
	}
	c.IndentedJSON(http.StatusOK, game)
}

func PostDrive(c *gin.Context) {
	db := database.Db()
	var drive models.Drive
	c.BindJSON(&drive)
	result := db.Create(&drive)

	if result.Error != nil {
		log.Fatal(result.Error)
		fmt.Println("CANNOT POST!")
	}
	c.IndentedJSON(http.StatusOK, drive)
}

func PostPlay(c *gin.Context) {
	db := database.Db()
	var play models.Play
	c.BindJSON(&play)
	// ポイント２
	result := db.Model(&models.Drive{}).Create(&play)

	if result.Error != nil {
		log.Fatal(result.Error)
		fmt.Println("CANNOT POST!")
	}
	c.IndentedJSON(http.StatusOK, play)
}

func PostTeamInfo(c *gin.Context) {
	db := database.Db()
	var teamInfo models.TeamInfo
	c.BindJSON(&teamInfo)
	// ポイント２
	result := db.Create(&teamInfo)

	if result.Error != nil {
		log.Fatal(result.Error)
		fmt.Println("CANNOT POST!")
	}
	c.IndentedJSON(http.StatusOK, teamInfo)
}

func PostPosition(c *gin.Context) {
	db := database.Db()
	var position models.Position
	c.BindJSON(&position)
	// ポイント２
	result := db.Model(&models.TeamInfo{}).Create(&position)

	if result.Error != nil {
		log.Fatal(result.Error)
		fmt.Println("CANNOT POST!")
	}
	c.IndentedJSON(http.StatusOK, position)
}

func PostAthlete(c *gin.Context) {
	db := database.Db()
	var athlete models.Athlete
	c.BindJSON(&athlete)
	// ポイント２
	result := db.Model(&models.Position{}).Create(&athlete)

	if result.Error != nil {
		log.Fatal(result.Error)
		fmt.Println("CANNOT POST!")
	}
	c.IndentedJSON(http.StatusOK, athlete)
}

// func PostDefensePosition(c *gin.Context) {
// 	db := database.Db()
// 	var defensePosition models.DefensePosition
// 	c.BindJSON(&defensePosition)
// 	// ポイント２
// 	result := db.Model(&models.TeamInfo{}).Create(&defensePosition)

// 	if result.Error != nil {
// 		log.Fatal(result.Error)
// 		fmt.Println("CANNOT POST!")
// 	}
// 	c.IndentedJSON(http.StatusOK, defensePosition)
// }
// func PostKickingPosition(c *gin.Context) {
// 	db := database.Db()
// 	var kickingPosition models.KickingPosition
// 	c.BindJSON(&kickingPosition)
// 	// ポイント２
// 	result := db.Model(&models.TeamInfo{}).Create(&kickingPosition)

// 	if result.Error != nil {
// 		log.Fatal(result.Error)
// 		fmt.Println("CANNOT POST!")
// 	}
// 	c.IndentedJSON(http.StatusOK, kickingPosition)
// }
// func PostOffensePosition(c *gin.Context) {
// 	db := database.Db()
// 	var offensePosition models.OffensePosition
// 	c.BindJSON(&offensePosition)
// 	// ポイント２
// 	result := db.Model(&models.TeamInfo{}).Create(&offensePosition)

// 	if result.Error != nil {
// 		log.Fatal(result.Error)
// 		fmt.Println("CANNOT POST!")
// 	}
// 	c.IndentedJSON(http.StatusOK, offensePosition)
// }

// func PostKickingAthlete(c *gin.Context) {
// 	db := database.Db()
// 	var kickingAthlete models.KickingAthlete
// 	c.BindJSON(&kickingAthlete)
// 	// ポイント２
// 	result := db.Model(&models.Position{}).Create(&kickingAthlete)

// 	if result.Error != nil {
// 		log.Fatal(result.Error)
// 		fmt.Println("CANNOT POST!")
// 	}
// 	c.IndentedJSON(http.StatusOK, kickingAthlete)
// }
// func PostDefenseAthlete(c *gin.Context) {
// 	db := database.Db()
// 	var defenseAthlete models.DefenseAthlete
// 	c.BindJSON(&defenseAthlete)
// 	// ポイント２
// 	result := db.Model(&models.Position{}).Create(&defenseAthlete)

// 	if result.Error != nil {
// 		log.Fatal(result.Error)
// 		fmt.Println("CANNOT POST!")
// 	}
// 	c.IndentedJSON(http.StatusOK, defenseAthlete)
// }
// func PostOffenseAthlete(c *gin.Context) {
// 	db := database.Db()
// 	var offenseAthlete models.OffenseAthlete
// 	c.BindJSON(&offenseAthlete)
// 	// ポイント２
// 	result := db.Model(&models.OffensePosition{}).Create(&offenseAthlete)

// 	if result.Error != nil {
// 		log.Fatal(result.Error)
// 		fmt.Println("CANNOT POST!")
// 	}
// 	c.IndentedJSON(http.StatusOK, offenseAthlete)
// }
