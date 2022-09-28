package main

import (
	"server/controllers"
	"server/database"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	database.Db()

	router := gin.Default()

	config := cors.DefaultConfig()
	config.AllowAllOrigins = true

	router.Use(cors.New(config))

	router.GET("/plays", controllers.GetPlays)
	router.POST("/plays", controllers.PostPlay)
	router.GET("/plays/latest", controllers.GetLatestPlay)
	router.GET("/drives", controllers.GetDrives)
	router.GET("/drives/latest", controllers.GetLatestDrive)
	router.POST("/drives", controllers.PostDrive)
	router.PUT("/drives/latest", controllers.UpdateLatestDrive)
	router.POST("/games", controllers.PostGame)
	router.GET("./games", controllers.GetGames)
	router.POST("/teaminfo", controllers.PostTeamInfo)
	router.POST("/position", controllers.PostPosition)
	router.POST("/athlete", controllers.PostAthlete)
	router.GET("/teaminfo/all", controllers.GetAllTeamInfo)
	router.GET("/teaminfo", controllers.GetTeamInfo)
	router.GET("/teaminfo/:name", controllers.GetSingleTeamByName)
	router.GET("/position", controllers.GetPositions)
	router.GET("/athlete", controllers.GetAthletes)
	router.GET("/games/latest", controllers.GetLatestGame)

	router.Run(":9091")
}

// router.POST("/offenseposition", controllers.PostOffensePosition)
// router.POST("/kickingposition", controllers.PostKickingPosition)
// router.POST("/defenseposition", controllers.PostDefensePosition)
// router.POST("/defenseathlete", controllers.PostDefenseAthlete)
// router.POST("/kickingathlete", controllers.PostKickingAthlete)
// router.POST("/offenseathlete", controllers.PostOffenseAthlete)
