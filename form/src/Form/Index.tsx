import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Game, TeamList } from '../GameForm/Alies'
import { Drive, Play } from './Alies'
import {BallTeam,OorK,PlayType,Passer,Runner,Result,Tackler,GainYards,Reciever,PassIsComplete,Kicker,KickIsGood,KickResult,Punter,ReturnYards, TOReturnYards, KickDistance,PuntDistance,Interception, Returner} from './components/EntryPoint'
import { AllProcessor } from './functions/EntryPoint'



type Props1 = {
    visible:boolean
    awayTeam:string
    homeTeam:string
}

const Index:React.FC<Props1> = ({visible,homeTeam,awayTeam}) => {

    if(visible){return null}
    console.log(homeTeam,awayTeam,"pp")

    const { register ,handleSubmit,watch } = useForm<Play>();

    const [id,setId] = useState<number>(1);
    const [ballOn,setBallOn]=useState<number>(35);

    const [homePoints,setHomePoints] = useState<number>(0);
    const [awayPoints,setAwayPoints] = useState<number>(0);
    const [down,setDown] = useState<number>(1);
    const [distance,setDistance] = useState<number>(10);
  

    const [yardsDrived,setYardsDrived] = useState<number>(0);
    const [playAmount,setPlayAmount] = useState<number>(0);

    const [gameData,setGameData] = useState<Game[]>([])
    const [driveData,setDriveData] =useState<Drive[]>([])
    const [homeTeamData,setHomeTeamData] = useState<TeamList[]>([])
    const [awayTeamData,setAwayTeamData] = useState<TeamList[]>([])

    useEffect(() => {
        
        const f = async () =>{
            await fetch("http://localhost:9091/games/latest", {method: 'GET',headers:{"Content-Type":"application/json"},})
                .then(res => res.json())
                .then(async data => {
                    setGameData(data["Value"])
                    console.log(data["Value"]["awayteam"])
                }).then(() => console.log("fetch gamedata")).then(() => { 
                })
            await fetch("http://localhost:9091/teaminfo/"+homeTeam, {method: 'GET',headers:{"Content-Type":"application/json"},})
                        .then(res => res.json())
                        .then(async data => {
                            setHomeTeamData(data["Value"])
                        }).then(() => console.log("fetch home"))
            await fetch("http://localhost:9091/teaminfo/"+awayTeam, {method: 'GET',headers:{"Content-Type":"application/json"},})
                        .then(res => res.json())
                        .then(async data => {
                            setAwayTeamData(data["Value"])
                        }).then(() => console.log("fetch away"))
            await fetch("http://localhost:9091/drives/latest", {method: 'GET',headers:{"Content-Type":"application/json"},})
                .then(res => res.json())
                .then(async data => {
                    setDriveData(data["Value"])
                }).then(() => console.log("fetch drivedata")).then(() => { 
                })
        }
        f();
        
    },[])

    const [ballPossession,setBallPossession]=useState<boolean>(gameData[0]?.cointos_result);
    const [ballPlace,setBallPlace]=useState<boolean>(gameData[0]?.cointos_result);

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
                            amount_of_play: playAmount+1,
                            yards_drived: yardsDrived + data.yards_gained,
                        })
                    }).then(() => {
                        console.log(yardsDrived,"update drive!")
                    })

                    setPlayAmount(prevPlays => prevPlays + 1)
                    setYardsDrived(prev => prev + data.yards_gained)

                    AllProcessor({ data, ballPlace, ballPossession, ballOn, down, distance,setPlayAmount,setYardsDrived, gameData, setBallPlace, setBallPossession, setBallOn, setId, setDown, setDistance, setHomePoints, setAwayPoints })

                    data.drive_id = id
                    data.ball_on = ballOn
                    data.hometeam_points = homePoints
                    data.awayteam_points = awayPoints
                    data.down = down
                    data.distance = distance

                    await fetch("http://localhost:9091/plays",{
                        method:"POST",
                        headers:{"Content-Type":"application/json"},
                        body: JSON.stringify(data)
                    }).then(() => {
                        console.log("success!")
                        console.log(data.ball_on)  
                        console.log(data.ball_on_result)
                        if ( data.o_or_k === "FG"|| data.o_or_k === "TFP"){
                            setId(prevId => prevId + 1)}
                    })
                    

                    // if ( data.o_or_k === "FG"|| data.o_or_k === "TFP"){
                    //     setId(prevId => prevId + 1)
                    //     await fetch("http://localhost:9091/drives",{
                    //     method:"POST",
                    //     headers:{"Content-Type":"application/json"},
                    //     body: JSON.stringify({})
                    // }).then(() => {
                    //     console.log("drive!")

                    // })
                    // }
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
