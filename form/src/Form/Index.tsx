import React, { useEffect, useState } from 'react'
import { useForm, UseFormHandleSubmit, UseFormRegister, UseFormReset, UseFormWatch } from 'react-hook-form'
import { Game, TeamList } from '../GameForm/Alies'
import { Drive, Play } from './Alies'
import {BallTeam,OorK,PlayType,Passer,Runner,Result,Tackler,GainYards,Reciever,PassIsComplete,Kicker,KickIsGood,KickResult,Punter,ReturnYards, TOReturnYards, KickDistance,PuntDistance,Interception, Returner} from './components/EntryPoint'
import { AllProcessor } from './functions/EntryPoint'



type Props1 = {
    visible:boolean
    awayTeam:string
    homeTeam:string
    register:UseFormRegister<Play>
    handleSubmit:UseFormHandleSubmit<Play>
    watch:UseFormWatch<Play>
    reset:UseFormReset<Play>
    driveId:number
    setDriveId:React.Dispatch<React.SetStateAction<number>>
    ballOn: number
    setBallOn: React.Dispatch<React.SetStateAction<number>>
    homePoints: number
    setHomePoints: React.Dispatch<React.SetStateAction<number>>
    awayPoints: number
    setAwayPoints: React.Dispatch<React.SetStateAction<number>>
    down: number
    setDown: React.Dispatch<React.SetStateAction<number>>
    distance: number
    setDistance: React.Dispatch<React.SetStateAction<number>>
    yardsDrived: number
    setYardsDrived: React.Dispatch<React.SetStateAction<number>>
    playAmount: number
    setPlayAmount: React.Dispatch<React.SetStateAction<number>>
    driveData: Drive[]
    setDriveData: React.Dispatch<React.SetStateAction<Drive[]>>
    gameData:Game[]
    setGameData:React.Dispatch<React.SetStateAction<Game[]>>
    homeTeamData: TeamList[]
    setHomeTeamData: React.Dispatch<React.SetStateAction<TeamList[]>>
    awayTeamData: TeamList[]
    setAwayTeamData: React.Dispatch<React.SetStateAction<TeamList[]>>
    ballPossession: boolean
    setBallPossession: React.Dispatch<React.SetStateAction<boolean>>
    ballPlace: boolean
    setBallPlace: React.Dispatch<React.SetStateAction<boolean>>
}

const Index:React.FC<Props1> = ({visible,homeTeam,awayTeam,register,handleSubmit,watch,reset,driveId,setDriveId,ballOn,setBallOn,homePoints,setHomePoints,awayPoints,setAwayPoints,down,setDown,distance,setDistance,yardsDrived,setYardsDrived,playAmount,setPlayAmount,gameData,setGameData,driveData,setDriveData,homeTeamData,setHomeTeamData,awayTeamData,setAwayTeamData,ballPossession,setBallPossession,ballPlace,setBallPlace}) => {

    if(visible){return null}
    console.log(homeTeam,awayTeam,"pp")

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
                <form onSubmit={handleSubmit(async(data) => {
                    // Initializer(plays,games,setGames);
                    await fetch("http://localhost:9091/drives/latest",{
                        method:"PUT",
                        headers:{"Content-Type":"application/json"},
                        body: JSON.stringify({
                            ball_possession:ballPossession?homeTeam:awayTeam,
                            amount_of_play: playAmount+1,
                            yards_drived: yardsDrived + data.yards_gained,
                        })
                    }).then(() => {
                        console.log(yardsDrived,"update drive!")
                    })

                    setPlayAmount(prevPlays => prevPlays + 1)
                    setYardsDrived(prev => prev + data.yards_gained)

                    AllProcessor({ data,homeTeam,awayTeam, ballPlace, ballPossession, ballOn, down, distance,setPlayAmount,setYardsDrived, gameData, setBallPlace, setBallPossession, setBallOn, setDriveId, setDown, setDistance, setHomePoints, setAwayPoints })

                    data.drive_id = driveId
                    data.ball_on = ballOn
                    data.hometeam_points = homePoints
                    data.awayteam_points = awayPoints
                    data.down = down
                    data.distance = distance
                    data.ball_possession_bool = ballPossession

                    await fetch("http://localhost:9091/plays",{
                        method:"POST",
                        headers:{"Content-Type":"application/json"},
                        body: JSON.stringify(data)
                    }).then(() => {
                        console.log("success!")
                        console.log(data.ball_on)  
                        console.log(data.ball_on_result)
                        if ( data.o_or_k === "FG"|| data.o_or_k === "TFP"){
                            setDriveId(prevId => prevId + 1)}
                    })
                    reset();
                    })}>
                    <BallTeam register={register}/>
                    <OorK register={register}/>
                    <PlayType register={register} value={watch()}/>
                    <Passer register={register}  value={watch()} homeTeamData={homeTeamData[0]} awayTeamData={awayTeamData[0]} ballPossession={ballPossession}/>
                    <PassIsComplete register={register} value={watch()}/>
                    <Reciever register={register} value={watch()} homeTeamData={homeTeamData[0]} awayTeamData={awayTeamData[0]} ballPossession={ballPossession}/>
                    <Runner register={register} value={watch()} homeTeamData={homeTeamData[0]} awayTeamData={awayTeamData[0]} ballPossession={ballPossession} />
                    <GainYards register={register} value={watch()}/>
                    <Result register={register} value={watch()}/>
                    <Interception register={register} value={watch()} homeTeamData={homeTeamData[0]} awayTeamData={awayTeamData[0]} ballPossession={false}/>
                    <Kicker register={register} value={watch()} homeTeamData={homeTeamData[0]} awayTeamData={awayTeamData[0]} ballPossession={ballPossession}/>
                    <Punter register={register} value={watch()} homeTeamData={homeTeamData[0]} awayTeamData={awayTeamData[0]} ballPossession={ballPossession}/>
                    <KickDistance register={register} value={watch()}/>
                    <PuntDistance register={register} value={watch()}/>
                    <ReturnYards register={register} value={watch()}/>
                    <KickIsGood register={register} value={watch()}/>
                    <KickResult register={register} value={watch()}/>
                    <Returner register={register} value={watch()} homeTeamData={homeTeamData[0]} awayTeamData={awayTeamData[0]} ballPossession={ballPossession}/>
                    <Tackler register={register} value={watch()} homeTeamData={homeTeamData[0]} awayTeamData={awayTeamData[0]} ballPossession={ballPossession}/>
                    <TOReturnYards register={register} value={watch()}/>
                    <div className='mt-2'>
                        <button type='submit' className='btn btn-lg btn-primary'>完了</button>
                    </div>
                </form>
            </div>
        </div>
        
    </div>
    )
}

export default Index
