import React,{useEffect, useState} from 'react';
import './App.css';
import { GameForm, HomeTeam } from './GameForm/EntryPoint';
import { PlayForm } from './Form/EntryPoint';
import { Game, GameTeams, TeamList } from './GameForm/Alies';
import { useForm } from 'react-hook-form';
import { Drive, Play } from './Form/Alies';


function App() {

  const { register ,handleSubmit,watch,reset } = useForm<Play>();
  // チーム名、プレイヤーなどの情報
  const [teamList,setTeamList] = useState<TeamList[]>([])
  // 試合数をカウント
  const [gameCount,setGameCount] = useState<number>(1);
  // 対戦チームなどのゲームデータ
  const [gameData,setGameData] = useState<Game[]>([]);

  // Formの出し入れをセット
  const [visible,setVisible] = useState<boolean>(true);
  // それぞれのチーム名を入れる
  const [awayTeam,setAwayTeam] = useState<string>("")
  const [homeTeam,setHomeTeam] = useState<string>("")
  const [reception,setReception] = useState<boolean>(true)

  console.log(visible)


  //　ドライブ数を示す。drive_idにセットされる
  const [driveId,setDriveId] = useState<number>(1);
  // ボールのあるヤード数をセットする
  const [ballOn,setBallOn]=useState<number>(35);

  // 両チームの得点をセットする
  const [homePoints,setHomePoints] = useState<number>(0);
  const [awayPoints,setAwayPoints] = useState<number>(0);
  // ダウンディスタンスをセットする
  const [down,setDown] = useState<number>(1);
  const [distance,setDistance] = useState<number>(10);

  // ドライブで合計のドライブされた量とplayの数
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

  // どっちのチームのボールか、ボールがどっちの陣地にあるか
  // trueならホーム,falseならaway。
  const [ballPossession,setBallPossession]=useState<boolean>(reception);
  const [ballPlace,setBallPlace]=useState<boolean>(reception);

  // レセプションがセットされたら、それに合わせて２つもセット
  // form記入をリスタートさせたいときに必要になる。
  useEffect(() => {
    setBallPossession(reception)
    setBallPlace(reception)
  },[reception])

  // form記入をリスタートするときに、apiから最後のゲームデータを取ってきてそのデータをそれぞれの変数にセットする。
  // useEffect (() => {
  //   setHomeTeam(gameData[0]?.hometeam)
  //   setAwayTeam(gameData[0]?.awayteam)
  //   setBallPossession(gameData[0]?.cointos_result)
  //   setBallPlace(gameData[0]?.cointos_result)
  //   console.log("set initial dat")
  // },[gameData])

  if(visible){
    return (
      <div className="">
        <GameForm visible={visible} setVisible={setVisible}  awayTeam={awayTeam} setAwayTeam={setAwayTeam} homeTeam={homeTeam} setHomeTeam={setHomeTeam} reception={reception} setReception={setReception} teamList={teamList} gameCount={gameCount} setGameCount={setGameCount} gameData={gameData} setGameData={setGameData} setHomeTeamData={setHomeTeamData} setAwayTeamData={setAwayTeamData} setYardsDrives={setYardsDrived} setPlayAmount={setPlayAmount} setBallPlace={setBallPlace} setBallPossession={setBallPossession} setDriveId={setDriveId} setBallOn={setBallOn} setDown={setDown} setDistance={setDistance}/>
      </div>
    );
  }
  return (
    <div className="">
      <PlayForm visible={visible} homeTeam={homeTeam} awayTeam={awayTeam} register={register} handleSubmit={handleSubmit} watch={watch} reset={reset} driveId={driveId} setDriveId={setDriveId} ballOn={ballOn} setBallOn={setBallOn} homePoints={homePoints} setHomePoints={setHomePoints} awayPoints={awayPoints} setAwayPoints={setAwayPoints} down={down} setDown={setDown} distance={distance}setDistance={setDistance} yardsDrived={yardsDrived} setYardsDrived={setYardsDrived} playAmount={playAmount} setPlayAmount={setPlayAmount} gameData={gameData} setGameData={setGameData} driveData={driveData} setDriveData={setDriveData} homeTeamData={homeTeamData} setHomeTeamData={setHomeTeamData} awayTeamData={awayTeamData} setAwayTeamData={setAwayTeamData} ballPossession={ballPossession} setBallPossession={setBallPossession} ballPlace={ballPlace} setBallPlace={setBallPlace}/>
    </div>
  );
}

export default App;
