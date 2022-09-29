import React,{useState,useEffect} from 'react'    


type DepthChartsUrls = {
    teamName:string
    url:string
}
// type Roster = {
//     kickingPositions:Position[]
//     defensePositions:Position[]
//     offensePositions:Position[]
// }

type TeamInfo = {
    team_name:string
    KickingPositions:Position[]
    DefensePositions:Position[]
    OffensePositions:Position[]
}

type Position = {     
    teaminfo_id:number
    position_name:string    
    Athletes:Athlete[]
    // atheletes:Athlete[]
}
type Athlete = {
    position_id:number
    athlete_url:string
    full_name:string
    jersey:string
}

var depthChartsUrls:DepthChartsUrls[] = []
// var teams={}
// var roster:Roster[] = []
var teamInfo:TeamInfo[] = []
var defensePositions:Position[] = []
var offensePositions:Position[] = []
var kickingPositions:Position[] = []
var athletesList:Athlete[] = []





useEffect(() => {
    const f  = async () => {
        for (let i = 1; i<31; i++){
            await fetch('http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2022/teams/'+i+'?lang=en&region=us', {
          method: 'GET'})
            .then(res => res.json())
            .then(data => {
                depthChartsUrls.push({
                    teamName: data["displayName"],
                    url: data["depthCharts"]["$ref"]
                })
        })}
        await fetch('http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2022/teams/'+33+'?lang=en&region=us', {
          method: 'GET'})
            .then(res => res.json())
            .then(data => {
                depthChartsUrls.push({
                    teamName: data["displayName"],
                    url: data["depthCharts"]["$ref"]
                })
        })
        await fetch('http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2022/teams/'+34+'?lang=en&region=us', {
          method: 'GET'})
            .then(res => res.json())
            .then( data => {
                depthChartsUrls.push({
                    teamName: data["displayName"],
                    url: data["depthCharts"]["$ref"]
                })
        })
        console.log(depthChartsUrls.length)

        const state = {
            positionID:1,
            teamInfoID:1,
        }
        // for (let i=0;i<depthChartsUrls.length;i++){
            await fetch(depthChartsUrls[state.teamInfoID-1].url, {method: 'GET'})
            .then(res => res.json())
            .then(async data => {
                for (let key in data["items"][0]["positions"]) {
                    for (var value of data["items"][0]["positions"][key]["athletes"]) {   
                        await fetch(value["athlete"]["$ref"],{method:'GET'}).then(res => res.json()).then(async playerData => {
                            // athletesList.push({
                            //     position_id:state.positionID,
                            //     athlete_url: value["athlete"]["$ref"],
                            //     full_name: playerData["displayName"],
                            //     jersey: playerData["jersey"]
                            // })
                            await fetch("http://localhost:9091/athletes/defense",{
                            method:"POST",
                            headers:{"Content-Type":"application/json"},
                            body: JSON.stringify({
                                position_id:state.positionID,
                                athlete_url: value["athlete"]["$ref"],
                                full_name: playerData["displayName"],
                                jersey: playerData["jersey"]
                            })})
                        })
                    }    
                    state.positionID ++;  
                    // defensePositions.push({
                    //     teaminfo_id:state.teamInfoID,
                    //     position_name: data["items"][0]["positions"][key]["position"]["name"],
                    //     Athletes: athletesList
                    // })
                    await fetch("http://localhost:9091/positions/defense",{
                        method:"POST",
                        headers:{"Content-Type":"application/json"},
                        body: JSON.stringify({
                            teaminfo_id:state.teamInfoID,
                            position_name: data["items"][0]["positions"][key]["position"]["name"],
                        })})
                    athletesList = []

                }
                console.log(state.positionID)
                state.positionID = 0

                for (let key in data["items"][1]["positions"]) {
                    for (var value of data["items"][1]["positions"][key]["athletes"]) {
                        await fetch(value["athlete"]["$ref"],{method:'GET'}).then(res => res.json()).then(async playerData => {
                            // athletesList.push({
                            //     position_id:state.positionID,
                            //     athlete_url: value["athlete"]["$ref"],
                            //     full_name: playerData["displayName"],
                            //     jersey: playerData["jersey"]
                            // })
                            await fetch("http://localhost:9091/athletes/kicking",{
                            method:"POST",
                            headers:{"Content-Type":"application/json"},
                            body: JSON.stringify({
                                position_id:state.positionID,
                                athlete_url: value["athlete"]["$ref"],
                                full_name: playerData["displayName"],
                                jersey: playerData["jersey"]
                            })})
                        })    
                    }      
                    state.positionID ++;  
                    // kickingPositions.push({
                    //     teaminfo_id:state.teamInfoID,
                    //     position_name: data["items"][1]["positions"][key]["position"]["name"],
                    //     Athletes: athletesList
                    // })
                    await fetch("http://localhost:9091/positions/kicking",{
                        method:"POST",
                        headers:{"Content-Type":"application/json"},
                        body: JSON.stringify({
                            teaminfo_id:state.teamInfoID,
                            position_name: data["items"][1]["positions"][key]["position"]["name"],
                        })})
                    athletesList = []
                }
                console.log(state.positionID)
                for (let key in data["items"][2]["positions"]) {
                    for (var value of data["items"][2]["positions"][key]["athletes"]) {
                        await fetch(value["athlete"]["$ref"],{method:'GET'}).then(res => res.json()).then(async playerData => {
                            // athletesList.push({
                            //     position_id:state.positionID,
                            //     athlete_url: value["athlete"]["$ref"],
                            //     full_name: playerData["displayName"],
                            //     jersey: playerData["jersey"]
                            // })
                            await fetch("http://localhost:9091/athletes/offense",{
                            method:"POST",
                            headers:{"Content-Type":"application/json"},
                            body: JSON.stringify({
                                position_id:state.positionID,
                                athlete_url: value["athlete"]["$ref"],
                                full_name: playerData["displayName"],
                                jersey: playerData["jersey"]
                            })})
                        })        
                    } 
                    state.positionID ++;  
                    // offensePositions.push({
                    //     teaminfo_id:state.teamInfoID,
                    //     position_name: data["items"][2]["positions"][key]["position"]["name"],
                    //     Athletes: athletesList
                    // })
                    await fetch("http://localhost:9091/positions/offense",{
                        method:"POST",
                        headers:{"Content-Type":"application/json"},
                        body: JSON.stringify({
                            teaminfo_id:state.teamInfoID,
                            position_name: data["items"][2]["positions"][key]["position"]["name"],
                        })})
                    athletesList = []
                }
                console.log(state.positionID)
                console.log(offensePositions)
                // teamInfo.push({
                //         team_name: depthChartsUrls[state.teamInfoID-1].teamName,
                //         KickingPositions: kickingPositions,
                //         DefensePositions: defensePositions,
                //         OffensePositions: offensePositions
                // })
                
            defensePositions = []
            offensePositions = []
            kickingPositions = []
            }) 
            // await fetch("http://localhost:9091/teaminfo",{
            //         method:"POST",
            //         headers:{"Content-Type":"application/json"},
            //         body: JSON.stringify({
            //             team_name:depthChartsUrls[state.teamInfoID-1].teamName
            //         })}).then(() => {console.log("success!")})            
        // }
        console.log("success")

        

    };
    f();
    
    
  }, []);