package controllers

import (
	"fmt"
	"server/database"
	"server/models"

	"log"
	"net/http"

	"github.com/gin-gonic/gin"
)

func GetPlays(c *gin.Context) {
	db := database.Db()
	plays := []models.Play{}
	result := db.Find(&plays)

	fmt.Println("GET!")
	//result := db.Last(&practices1)
	if result.Error != nil {
		log.Fatal(result.Error)
		fmt.Println("ERROR!")
	}
	c.IndentedJSON(http.StatusOK, result)
}

func GetDrives(c *gin.Context) {
	db := database.Db()
	drives := []models.Drive{}
	// ポイント3
	result := db.Preload("Plays").Find(&drives)

	fmt.Println("GET!")
	//result := db.Last(&practices1)
	if result.Error != nil {
		log.Fatal(result.Error)
		fmt.Println("ERROR!")
	}
	c.IndentedJSON(http.StatusOK, result)
}

func GetLatestDrive(c *gin.Context) {
	db := database.Db()
	drive := []models.Drive{}
	// ポイント3
	result := db.Preload("Plays").Last(&drive)

	fmt.Println("GET!")
	//result := db.Last(&practices1)
	if result.Error != nil {
		log.Fatal(result.Error)
		fmt.Println("ERROR!")
	}
	c.IndentedJSON(http.StatusOK, result)
}

func GetGames(c *gin.Context) {
	db := database.Db()
	games := []models.Game{}
	// ポイント3
	result := db.Preload("Drives.Plays").Find(&games)

	fmt.Println("GET!")
	//result := db.Last(&practices1)
	if result.Error != nil {
		log.Fatal(result.Error)
		fmt.Println("ERROR!")
	}
	c.IndentedJSON(http.StatusOK, result)
}

func GetLatestGame(c *gin.Context) {
	db := database.Db()
	game := []models.Game{}
	// ポイント3
	result := db.Preload("Drives.Plays").First(&game)

	fmt.Println("GET!")
	//result := db.Last(&practices1)
	if result.Error != nil {
		log.Fatal(result.Error)
		fmt.Println("ERROR!")
	}
	c.IndentedJSON(http.StatusOK, result)
}

func GetLatestPlay(c *gin.Context) {
	db := database.Db()
	play := models.Play{}
	result := db.Last(&play)

	fmt.Println("GET!")
	//result := db.Last(&practices1)
	if result.Error != nil {
		log.Fatal(result.Error)
		fmt.Println("ERROR!")
	}
	c.IndentedJSON(http.StatusOK, result)
}

func GetAllTeamInfo(c *gin.Context) {
	db := database.Db()
	teamInfo := []models.TeamInfo{}
	result := db.Preload("Positions.Athletes").Find(&teamInfo)

	fmt.Println("GET!")
	//result := db.Last(&practices1)
	if result.Error != nil {
		log.Fatal(result.Error)
		fmt.Println("ERROR!")
	}
	c.IndentedJSON(http.StatusOK, result)
}

func GetTeamInfo(c *gin.Context) {
	db := database.Db()
	teamInfo := []models.TeamInfo{}
	result := db.Find(&teamInfo)

	fmt.Println("GET!")
	//result := db.Last(&practices1)
	if result.Error != nil {
		log.Fatal(result.Error)
		fmt.Println("ERROR!")
	}
	c.IndentedJSON(http.StatusOK, result)
}
func GetSingleTeamByName(c *gin.Context) {
	db := database.Db()
	var singleTeamInfo []models.TeamInfo
	// id, _ := strconv.Atoi(c.Param("id"))
	name := c.Param("name")
	// paramsでエンドポイントにあるパラメータをidに格納している
	result := db.Where("team_name = ?", name).Preload("Positions.Athletes").First(&singleTeamInfo)
	// WHEREでidと一致するものをデータベースから探し、それをDELETEしている
	fmt.Println("GET!")
	//result := db.Last(&practices1)
	if result.Error != nil {
		log.Fatal(result.Error)
		fmt.Println("ERROR!")
	}
	c.IndentedJSON(http.StatusOK, result)
}

func GetPositions(c *gin.Context) {
	db := database.Db()
	positions := []models.Position{}
	result := db.Preload("Athletes").Find(&positions)

	fmt.Println("GET!")
	//result := db.Last(&practices1)
	if result.Error != nil {
		log.Fatal(result.Error)
		fmt.Println("ERROR!")
	}
	c.IndentedJSON(http.StatusOK, result)
}

func GetAthletes(c *gin.Context) {
	db := database.Db()
	athletes := []models.Athlete{}
	result := db.Find(&athletes)

	fmt.Println("GET!")
	//result := db.Last(&practices1)
	if result.Error != nil {
		log.Fatal(result.Error)
		fmt.Println("ERROR!")
	}
	c.IndentedJSON(http.StatusOK, result)
}
