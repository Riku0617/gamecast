import React from 'react'
import { Play } from '../Alies';
import { Props } from './Alies';

type Props2 =  Props & {
  value: Play
};

const Passer:React.FC<Props2> = ({register,value}) => {
  if (value.play_type === "Pass" && value.o_or_k === "Offense"){
    return (
      <>
          <div className="mx-2 mt-2"><h5>Passer</h5></div>
              <select {...register("passer")} className="col-10 col-sm-3">
                  <option value="0">-</option>
                  <option value="4"> </option>
                  <option value="2">2</option>
                  <option value="8">8</option>
                  <option value="13">10</option>
              </select>
      </>
    )
  }
  return null
  
}

export default Passer
