import React,{useState,useEffect} from 'react'
import {useForm} from "react-hook-form"
import { Game, GameTeams, TeamList } from './Alies'
import {HomeTeam,AwayTeam} from './EntryPoint'


type Props = {
    visible:boolean
    setVisible: React.Dispatch<React.SetStateAction<boolean>>
    setHomeTeam:React.Dispatch<React.SetStateAction<string>>
    setAwayTeam:React.Dispatch<React.SetStateAction<string>>
}

const Index:React.FC<Props> = ({visible,setVisible,setHomeTeam,setAwayTeam}) => {

    const { register ,handleSubmit,watch } = useForm<Game>();

    const [teamList,setTeamList] = useState<TeamList[]>([])
    const [games,setGames] = useState<number>(1);


    useEffect(() => {
        fetch('http://localhost:9091/teaminfo', {
        method: 'GET'})
        .then(res => res.json())
        .then(data => {
        setTeamList(data["Value"])
    })
    },[])


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
                <form onSubmit={handleSubmit((data) => {
                    console.log(data)
                    setVisible(false)
                    fetch("http://localhost:9091/games",{
                        method:"POST",
                        headers:{"Content-Type":"application/json"},
                        body: JSON.stringify(data)
                    }).then(() => {
                        console.log("success!")
                        console.log(data)
                    })
                    fetch("http://localhost:9091/drives",{
                    method:"POST",
                    headers:{"Content-Type":"application/json"},
                    body: JSON.stringify({
                        game_id:games,
                        ball_possession:data.hometeam
                    })
                    }).then(() => {
                    console.log("Post initial drive!")
                    setGames(prevGames => prevGames + 1)
                    })
                    setHomeTeam(watch().hometeam)
                    setAwayTeam(watch().awayteam)
                    })}>
                    <HomeTeam teamList={teamList} register={register}/>
                    <AwayTeam teamList={teamList} register={register}/>
                    <div className='mt-2'>
                        <button type='submit' className='btn btn-lg btn-primary'>完了</button>
                    </div>
                </form>
                <form onSubmit={handleSubmit(() => {setVisible(false)})}>
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
