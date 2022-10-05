import React,{useState,useEffect} from 'react'
import {useForm, UseFormHandleSubmit, UseFormRegister, UseFormWatch} from "react-hook-form"
import { Game, GameTeams, TeamList } from './Alies'
import Conitos from './Conitos'
import {HomeTeam,AwayTeam} from './EntryPoint'


type Props = {
    visible:boolean
    setVisible: React.Dispatch<React.SetStateAction<boolean>>
    homeTeam:string
    setHomeTeam:React.Dispatch<React.SetStateAction<string>>
    awayTeam:string
    setAwayTeam:React.Dispatch<React.SetStateAction<string>>
    reception:boolean
    setReception:React.Dispatch<React.SetStateAction<boolean>>
    teamList:TeamList[]
    gameCount: number
    setGameCount: React.Dispatch<React.SetStateAction<number>>
    gameData: Game[]
    setGameData: React.Dispatch<React.SetStateAction<Game[]>>
    setHomeTeamData:React.Dispatch<React.SetStateAction<TeamList[]>>
    setAwayTeamData:React.Dispatch<React.SetStateAction<TeamList[]>>
    setYardsDrives:React.Dispatch<React.SetStateAction<number>>
    setPlayAmount:React.Dispatch<React.SetStateAction<number>>
    setBallPossession:React.Dispatch<React.SetStateAction<boolean>>
    setBallPlace:React.Dispatch<React.SetStateAction<boolean>>
    setDriveId:React.Dispatch<React.SetStateAction<number>>
    setBallOn:React.Dispatch<React.SetStateAction<number>>
    setDown:React.Dispatch<React.SetStateAction<number>>
    setDistance:React.Dispatch<React.SetStateAction<number>>
}

const Index:React.FC<Props> = ({visible,setVisible,homeTeam,setHomeTeam,awayTeam,setAwayTeam,reception,setReception,teamList,gameCount,setGameCount,gameData,setGameData,setHomeTeamData,setAwayTeamData,setYardsDrives,setPlayAmount,setBallPlace,setBallPossession,setDriveId,setBallOn,setDown,setDistance}) => {


    const handleSubmit1 = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setVisible(false)
        fetch("http://localhost:9091/games",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify({
                hometeam:homeTeam,
                awayteam:awayTeam,
                cointos_result: reception,
            })
        }).then(() => {
            console.log("success!")
        })
        fetch("http://localhost:9091/drives",{
        method:"POST",
        body: JSON.stringify({
            game_id:gameCount,
            ball_possession:reception?homeTeam:awayTeam
        })
        }).then(() => {
        console.log("Post initial drive!")
        setGameCount(prevGames => prevGames + 1)
        })
    }

    const handleSubmit2 = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setVisible(false)
        fetch("http://localhost:9091/games/latest", {method: 'GET'})
            .then(res => res.json())
            .then(async data => {
                setGameData(data["Value"])
                setReception(data["Value"][0]["cointos_result"])
                setHomeTeam(gameData[0]?.hometeam)
                setAwayTeam(gameData[0]?.awayteam)
                setBallPossession(data["Value"][0]["cointos_result"])
                setBallPlace(data["Value"][0]["cointos_result"])
        }).then(() => console.log("Form Set!"))

        fetch("http://localhost:9091/drives/latest", {method: 'GET'})
            .then(res => res.json())
            .then(async data => {
                setYardsDrives(data["Value"][0]["yards_drived"])
                setPlayAmount(data["Value"][0]["amount_of_play"])
                setDriveId(data["Value"][0]["ID"])
                console.log(data["Value"][0]["ID"],"id")
                }).then(() => console.log("Form Set!"))

        fetch("http://localhost:9091/plays/latest", {method: 'GET'})
            .then(res => res.json())
            .then(async data => {
                setBallPossession(data["Value"][0]["ball_possession_bool"])
                setBallPlace(data["Value"][0]["ball_place_result_bool"])
                setBallOn(data["Value"][0]["ball_on_result"])
                setDown(data["Value"][0]["down_result"])
                setDistance(data["Value"][0]["distance_result"])
        }).then(() => console.log("Form Set!"))

        fetch("http://localhost:9091/teaminfo/"+homeTeam, {method: 'GET',headers:{"Content-Type":"application/json"},})
            .then(res => res.json())
            .then(async data => {
                setHomeTeamData(data["Value"])
                console.log(data["Value"],"a")
            }).then(() => console.log("fetch home"))
        fetch("http://localhost:9091/teaminfo/"+awayTeam, {method: 'GET',headers:{"Content-Type":"application/json"},})
            .then(res => res.json())
            .then(async data => {
                setAwayTeamData(data["Value"])
            }).then(() => console.log("fetch away"))
    }   

    if(!visible){return null}

    return (
        <div className="">
        <div  className="bg-dark text-white d-flex justify-content-center">
            <h1>Football Game Cast</h1>
        </div>
        <div className='m-4'>
            <div className="mt-4">
                <div>
                    <h4>Play記録フォーム</h4>
                </div>
                <form onSubmit={(e) => handleSubmit1(e)}>
                    <HomeTeam teamList={teamList} setHomeTeam={setHomeTeam}/>
                    <AwayTeam teamList={teamList} setAwayTeam={setAwayTeam}/>
                    <Conitos homeTeam={homeTeam} awayTeam={awayTeam} setReception={setReception}/>
                    <div className='mt-2'>
                        <button type='submit' className='btn btn-lg btn-primary'>完了</button>
                    </div>
                </form>
                <form onSubmit={(e) => handleSubmit2(e)}>
                    <div className='mt-2'>
                        <button type='submit' className='btn btn-lg btn-primary'>PlayFormへ</button>
                    </div>
                </form>
            </div>
        </div>
        
    </div>
    )
}

export default Index
