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
    setTeamList: React.Dispatch<React.SetStateAction<TeamList[]>>
    games: number
    setGames: React.Dispatch<React.SetStateAction<number>>
    gameData: Game[]
    setGameData: React.Dispatch<React.SetStateAction<Game[]>>
    setHomeTeamData:React.Dispatch<React.SetStateAction<TeamList[]>>
    setAwayTeamData:React.Dispatch<React.SetStateAction<TeamList[]>>
}

const Index:React.FC<Props> = ({visible,setVisible,homeTeam,setHomeTeam,awayTeam,setAwayTeam,reception,setReception,teamList,setTeamList,games,setGames,gameData,setGameData,setHomeTeamData,setAwayTeamData}) => {


    const handleSubmit1 = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setVisible(false)
        fetch("http://localhost:9091/games",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify({
                hometeam:homeTeam,
                awayteam:awayTeam
            })
        }).then(() => {
            console.log("success!")
        })
        fetch("http://localhost:9091/drives",{
        method:"POST",
        body: JSON.stringify({
            game_id:games,
            ball_possession:reception?homeTeam:awayTeam
        })
        }).then(() => {
        console.log("Post initial drive!")
        setGames(prevGames => prevGames + 1)
        })
    }

    const handleSubmit2 = () => {
        setVisible(false)
        fetch("http://localhost:9091/games/latest", {method: 'GET'})
            .then(res => res.json())
            .then(async data => {
                setGameData(data["Value"])
                setReception(data["Value"]["cointos_result"])
                setHomeTeam(gameData[0]?.hometeam)
                setAwayTeam(gameData[0]?.awayteam)
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
                <form onSubmit={() => handleSubmit2()}>
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
