package main

import (
	"server/controllers"
	"server/database"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	database.Db()

	router := gin.Default()

	config := cors.DefaultConfig()
	config.AllowAllOrigins = true

	router.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:3000"},
		AllowMethods:     []string{"PUT", "POST", "GET", "DELETE"},
		AllowHeaders:     []string{"Content-Type"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		MaxAge:           12 * time.Hour,
	}))

	router.GET("/plays", controllers.GetPlays)
	router.POST("/plays", controllers.PostPlay)
	router.GET("/plays/latest", controllers.GetLatestPlay)

	router.GET("/drives", controllers.GetDrives)
	router.GET("/drives/latest", controllers.GetLatestDrive)
	router.POST("/drives", controllers.PostDrive)
	router.PUT("/drives/latest", controllers.UpdateLatestDrive)

	router.POST("/teaminfo", controllers.PostTeamInfo)
	router.POST("/position", controllers.PostPosition)
	router.POST("/athlete", controllers.PostAthlete)
	router.GET("/teaminfo/all", controllers.GetAllTeamInfo)
	router.GET("/teaminfo", controllers.GetTeamInfo)
	router.GET("/teaminfo/:name", controllers.GetSingleTeamByName)
	router.GET("/position", controllers.GetPositions)
	router.GET("/athlete", controllers.GetAthletes)

	router.POST("/games", controllers.PostGame)
	router.GET("./games", controllers.GetGames)
	router.GET("/games/latest", controllers.GetLatestGame)

	router.POST("/athletes/defense", controllers.PostDefenseAthlete)
	router.POST("/athletes/offense", controllers.PostOffenseAthlete)
	router.POST("/athletes/kicking", controllers.PostKickingAthlete)

	router.POST("/positions/defense", controllers.PostDefensePosition)
	router.POST("/positions/offense", controllers.PostOffensePosition)
	router.POST("/positions/kicking", controllers.PostKickingPosition)

	router.GET("/positions/offense", controllers.GetOffensePositions)
	router.GET("/positions/defense", controllers.GetDefensePositions)
	router.GET("/positions/kicking", controllers.GetKickingPositions)

	router.GET("/athletes/offense", controllers.GetOffenseAthletes)

	router.Run(":9091")
}

// router.POST("/offenseposition", controllers.PostOffensePosition)
// router.POST("/kickingposition", controllers.PostKickingPosition)
// router.POST("/defenseposition", controllers.PostDefensePosition)
// router.POST("/defenseathlete", controllers.PostDefenseAthlete)
// router.POST("/kickingathlete", controllers.PostKickingAthlete)
// router.POST("/offenseathlete", controllers.PostOffenseAthlete)
