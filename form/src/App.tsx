import React,{useState} from 'react';
import './App.css';
import { GameForm } from './GameForm/EntryPoint';
import { PlayForm } from './Form/EntryPoint';
import { Game, GameTeams } from './GameForm/Alies';


function App() {
  const [visible,setVisible] = useState<boolean>(true);
  const [awayTeam,setAwayTeam] = useState<string>("")
  const [homeTeam,setHomeTeam] = useState<string>("")

  console.log(visible)

  if(visible){
    return (
      <div className="">
        <GameForm visible={visible} setVisible={setVisible} setAwayTeam={setAwayTeam} setHomeTeam={setHomeTeam}/>
      </div>
    );
  }
  return (
    <div className="">
      <PlayForm visible={visible} homeTeam={homeTeam} awayTeam={awayTeam}/>
    </div>
  );
}

export default App;
