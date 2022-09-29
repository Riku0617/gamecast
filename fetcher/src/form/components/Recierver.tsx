import React from 'react'
import {  Props2 } from './Alies';


const Recierver:React.FC<Props2> = ({register,value})=> {
    if(value.play_type === "Pass" && value.pass_iscomplete === "Complete"){
        return (
          <>
              <div className="mx-2 mt-2"><h5>Reciever</h5></div>
                  <select {...register("reciever")} className="col-10 col-sm-3">
                      <option value="-">-</option>
                      <option value="11">11</option>
                      <option value="18">18</option>
                  </select>
          </>
        )
      }
      return null
    
      
    }


export default Recierver
