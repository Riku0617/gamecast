package controllers

import (
	"net/http"
	"server/database"
	"server/models"

	"github.com/gin-gonic/gin"
)

var db = database.Db()

// Playが更新されるたびに、最後のIDのDriveの数値が更新されるようにするUpdataを入れる

func UpdateLatestDrive(c *gin.Context) {
	var drive models.Drive

	var data models.Drive

	if err := c.BindJSON(&data); err != nil {
		c.String(http.StatusBadRequest, "Request is failed: "+err.Error())
	}
	// Backで操作しても良い？多分FRONTに入力された数値をもとに、PUTリクエストを出すべきなきがする
	// play.AmountOfPlays++
	// play.YardsDrived += 10
	database.Db().Last(&drive).Updates(&data)
	c.JSON(200, &data)
}

func UpdateLatestGame(c *gin.Context) {
	var games []models.Game

	var data models.Game

	if err := c.BindJSON(&data); err != nil {
		c.String(http.StatusBadRequest, "Request is failed: "+err.Error())
	}

	// Backで操作しても良い？多分FRONTに入力された数値をもとに、PUTリクエストを出すべきなきがする
	// play.AmountOfPlays++
	// play.YardsDrived += 10
	database.Db().First(&games).Save(&data)
	c.JSON(200, &data)
}

// user := NewUser()
//  id := c.Param("id")

//  data := NewUser()
//  if err := c.BindJSON(&data); err != nil {
//    c.String(http.StatusBadRequest, "Request is failed: "+err.Error())
//  }

//  db.Where("ID = ?", id).First(&user).Updates(&data)
