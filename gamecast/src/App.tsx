import React,{useEffect,useState,createContext} from 'react';
import './App.css';
import { Drives, Play } from './Alies';
import Pointer from './components/Pointer'
import { InitialState } from './components/EntryPoint';
import { initialState } from './InitialState';

export const FetchData = createContext<Play>(initialState)

function App() {

  const [latestPlay,setLatestPlay] = useState<Play>(initialState);
  const [drives,setDrives] = useState<Drives[]>([]);
  const [plays,setPlays] = useState<Play[]>([]);


  useEffect(() => {
    fetch('http://localhost:9091/plays/latest', {
      method: 'GET'})
    .then(res => res.json())
    .then(data => {
        setLatestPlay(data["Value"])
        console.log("Fetch LatestPlay!")
    })
    fetch('http://localhost:9091/drives', {
      method: 'GET'})
    .then(res => res.json())
    .then(data => {
        setDrives(data["Value"])
        console.log("Fetch Drives!")
    })
    fetch('http://localhost:9091/plays', {
      method: 'GET'})
    .then(res => res.json())
    .then(data => {
        setPlays(data["Value"])
        console.log("Fetch Plays!")
    })
  },[])



  return (
  //  <FetchData.Provider value={latestPlay.}>
      <Pointer latestPlay={latestPlay} drives={drives} plays={plays}/>
   // </FetchData.Provider>
  );
}

export default App;
