import React,{useContext} from 'react'
import { Drives, Play } from '../Alies'
import { FetchData } from '../App'
import {FG,KickOff,Pass,Punt,Run,TFP1,TFP2} from './EntryPoint'

const Pointer: React.FC<{latestPlay:Play,drives:Drives[],plays:Play[]}> = ({latestPlay,drives,plays}) => {


  var driveItems: Play[][] =[]
  drives.map((drive,index)=>
  driveItems.push(drive.Plays)
  )
  console.log(driveItems)


  const driveLists = drives.map((drive,index)=>
  <>
    {/* <div><h3>drive{drive.ID}</h3></div> */}
      <div><h2>Drive{drive.ID}</h2>
        {drive.Plays.map((play)=>
      <>
        <div>
            <>
              <Run value={play} />
              <Pass value={play} />
              <KickOff value={play} />
              <FG value={play} />
              <Punt value={play} />
              {/* <TFP1 value={play}/>
              <TFP2 value={play}/> */}
            </>
          </div>
        </>)}</div>
  </>
  )
  return (
    <>
    {driveLists}
    </>

  )
}

export default Pointer
