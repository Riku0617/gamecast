import React,{useEffect, useState} from 'react';
import './App.css';
import { GameForm, HomeTeam } from './GameForm/EntryPoint';
import { PlayForm } from './Form/EntryPoint';
import { Game, GameTeams, TeamList } from './GameForm/Alies';
import { useForm } from 'react-hook-form';
import { Drive, Play } from './Form/Alies';


function App() {
  
  const [teamList,setTeamList] = useState<TeamList[]>([])
  const [games,setGames] = useState<number>(1);
  const [gameData,setGameData] = useState<Game[]>([]);

  const [visible,setVisible] = useState<boolean>(true);
  const [awayTeam,setAwayTeam] = useState<string>("")
  const [homeTeam,setHomeTeam] = useState<string>("")
  const [reception,setReception] = useState<boolean>(true)

  console.log(visible)

  const { register ,handleSubmit,watch,reset } = useForm<Play>();

  const [id,setId] = useState<number>(1);
  const [ballOn,setBallOn]=useState<number>(35);

  const [homePoints,setHomePoints] = useState<number>(0);
  const [awayPoints,setAwayPoints] = useState<number>(0);
  const [down,setDown] = useState<number>(1);
  const [distance,setDistance] = useState<number>(10);


  const [yardsDrived,setYardsDrived] = useState<number>(0);
  const [playAmount,setPlayAmount] = useState<number>(0);

  // const [gameData,setGameData] = useState<Game[]>([])
  const [driveData,setDriveData] =useState<Drive[]>([])
  const [homeTeamData,setHomeTeamData] = useState<TeamList[]>([])
  const [awayTeamData,setAwayTeamData] = useState<TeamList[]>([])

  console.log(homeTeam)

  useEffect(() => {
      fetch("http://localhost:9091/games/latest", {method: 'GET',headers:{"Content-Type":"application/json"},})
            .then(res => res.json())
            .then(async data => {
                setGameData(data["Value"])
                console.log(data["Value"]["awayteam"])
            }).then(() => console.log("fetch gamedata")).then(() => { 
            })
        if (homeTeam != ""){
      fetch("http://localhost:9091/teaminfo/"+homeTeam, {method: 'GET',headers:{"Content-Type":"application/json"},})
                    .then(res => res.json())
                    .then(async data => {
                        setHomeTeamData(data["Value"])
                        console.log(data["Value"],"a")
                    }).then(() => console.log("fetch home"))
        }
        
      fetch("http://localhost:9091/drives/latest", {method: 'GET',headers:{"Content-Type":"application/json"},})
            .then(res => res.json())
            .then(async data => {
                setDriveData(data["Value"])
            }).then(() => console.log("fetch drivedata")).then(() => { 
            })
      fetch('http://localhost:9091/teaminfo', {
              method: 'GET'})
              .then(res => res.json())
              .then(data => {
              setTeamList(data["Value"])
          })
      },[homeTeam])

  useEffect(() => {
    if ( awayTeam != ""){
      fetch("http://localhost:9091/teaminfo/"+awayTeam, {method: 'GET',headers:{"Content-Type":"application/json"},})
      .then(res => res.json())
      .then(async data => {
          setAwayTeamData(data["Value"])
      }).then(() => console.log("fetch away"))
    }
  },[awayTeam])

  const [ballPossession,setBallPossession]=useState<boolean>(reception);
  const [ballPlace,setBallPlace]=useState<boolean>(reception);

  useEffect(() => {
    setBallPossession(reception)
    setBallPlace(reception)
  },[reception])

  useEffect (() => {
    setHomeTeam(gameData[0]?.hometeam)
    setAwayTeam(gameData[0]?.awayteam)
    setBallPossession(gameData[0]?.cointos_result)
    setBallPlace(gameData[0]?.cointos_result)
    console.log("set initial dat")
  },[gameData])

  if(visible){
    return (
      <div className="">
        <GameForm visible={visible} setVisible={setVisible}  awayTeam={awayTeam} setAwayTeam={setAwayTeam} homeTeam={homeTeam} setHomeTeam={setHomeTeam} reception={reception} setReception={setReception} teamList={teamList} setTeamList={setTeamList} games={games} setGames={setGames} gameData={gameData} setGameData={setGameData} setHomeTeamData={setHomeTeamData} setAwayTeamData={setAwayTeamData}/>
      </div>
    );
  }
  return (
    <div className="">
      <PlayForm visible={visible} homeTeam={homeTeam} awayTeam={awayTeam} register={register} handleSubmit={handleSubmit} watch={watch} reset={reset} id={id} setId={setId} ballOn={ballOn} setBallOn={setBallOn} homePoints={homePoints} setHomePoints={setHomePoints} awayPoints={awayPoints} setAwayPoints={setAwayPoints} down={down} setDown={setDown} distance={distance}setDistance={setDistance} yardsDrived={yardsDrived} setYardsDrived={setYardsDrived} playAmount={playAmount} setPlayAmount={setPlayAmount} gameData={gameData} setGameData={setGameData} driveData={driveData} setDriveData={setDriveData} homeTeamData={homeTeamData} setHomeTeamData={setHomeTeamData} awayTeamData={awayTeamData} setAwayTeamData={setAwayTeamData} ballPossession={ballPossession} setBallPossession={setBallPossession} ballPlace={ballPlace} setBallPlace={setBallPlace}/>
    </div>
  );
}

export default App;
