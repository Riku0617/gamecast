

export type Play = {
    drive_id        :number  
    hometeam       :string
    awayteam       :string
    hometeam_points :number
    awayteam_points :number
    ball_possession :string 
    ball_place      :string
    ball_place_result:string
    ball_on         :number
    ball_on_result:number
    down            :number
    distance        :number
    o_or_k          :string 
    play_type       :string 
    passer          :string 
    reciever        :string
    pass_iscomplete :string
    turnover_place  :boolean
    turnover_yards  :number
    carrier         :string 
    result          :string
    to_return_yards :number 
    tackler         :string 
    yards_gained    :number 
    kicker          :string
    kick_distance  :number
    punter          :string
    punt_distance   :number
    returner        :string
    kick_isgood     :string
    kick_result     :string
    return_yards    :number
    yards_recovered :number
}

export type Drive = {
    game_id         :number   
	ball_possession :string
	amount_of_play  :number   
	yards_drived    :number   
	possession_time :number  
	drive_result    :string 
	points_gained   :number   
    Play :Play[]
}




export{}