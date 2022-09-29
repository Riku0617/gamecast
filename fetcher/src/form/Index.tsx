import React,{useState,useEffect} from 'react'
import {useForm} from "react-hook-form"
import './style.css'
import {BallTeam,OorK,PlayType,Passer,Runner,Result,Tackler,GainYards,Reciever,PassIsComplete,Kicker,KickIsGood,KickResult,Punter,ReturnYards, TOReturnYards, KickDistance,PuntDistance,Interception,SetTeams} from './EntryPoint'
import { Play,TeamList } from './Alies'
import Returner from './components/Returner'
import { Initializer,AllProcessor} from './functions/EntryPoint'
import { features } from 'process'



var playAmount = 0

const Index = () => {

    const { register ,handleSubmit,watch } = useForm<Play>();

    const [id,setId] = useState<number>(1);
    const [ballOn,setBallOn]=useState<number>(35);
    const [ballPossession,setBallPossession]=useState<boolean>(true);
    const [ballPlace,setBallPlace]=useState<boolean>(true);
    const [homePoints,setHomePoints] = useState<number>(0);
    const [awayPoints,setAwayPoints] = useState<number>(0);
    const [down,setDown] = useState<number>(1);
    const [distance,setDistance] = useState<number>(10);
    const [teamList,setTeamList] = useState<TeamList[]>([])

    useEffect(() => {
        fetch('http://localhost:9091/teaminfo', {
        method: 'GET'})
        .then(res => res.json())
        .then(data => {
        setTeamList(data["Value"])
    })
    },[])

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
                <form onSubmit={handleSubmit((data) => {


                    AllProcessor({data,ballPlace,ballPossession,ballOn,down,distance,setBallPlace,setBallPossession,setBallOn,setId,setDown,setDistance,setHomePoints,setAwayPoints})

                    Initializer(playAmount);

                    console.log(data.ball_place_result)
                   
                    playAmount++;
                    data.drive_id = id
                    data.ball_on = ballOn
                    data.hometeam_points = homePoints
                    data.awayteam_points = awayPoints
                    data.down = down
                    data.distance = distance
            
                    fetch("http://localhost:9091/plays",{
                        method:"POST",
                        headers:{"Content-Type":"application/json"},
                        body: JSON.stringify(data)
                    }).then(() => {
                        console.log("success!")
                        console.log(data.ball_on)  
                        console.log(data.ball_on_result)
                    })
            
                    if ( data.o_or_k === "FG"|| data.o_or_k === "TFP"){
                        setId(prevId => prevId + 1)
                        fetch("http://localhost:9091/drives",{
                        method:"POST",
                        headers:{"Content-Type":"application/json"},
                        body: JSON.stringify({})
                    }).then(() => {
                        console.log("drive!")

                    })
                    }
                })}>
                    <SetTeams teamList={teamList}/>
                    <BallTeam register={register}/>
                    <OorK register={register}/>
                    <PlayType register={register} value={watch()}/>
                    <Passer register={register}  value={watch()}/>
                    <PassIsComplete register={register} value={watch()}/>
                    <Reciever register={register} value={watch()}/>
                    <Runner register={register} value={watch()}/>
                    <GainYards register={register} value={watch()}/>
                    <Result register={register} value={watch()}/>
                    <Interception register={register} value={watch()}/>
                    <Kicker register={register} value={watch()}/>
                    <Punter register={register} value={watch()}/>
                    <KickDistance register={register} value={watch()}/>
                    <PuntDistance register={register} value={watch()}/>
                    <ReturnYards register={register} value={watch()}/>
                    <KickIsGood register={register} value={watch()}/>
                    <KickResult register={register} value={watch()}/>
                    <Returner register={register} value={watch()}/>
                    <Tackler register={register}/>
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