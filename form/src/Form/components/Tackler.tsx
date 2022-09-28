import React from 'react'

import { Props } from './Alies';

const Tackler:React.FC<Props> = ({register}) => {


  return (
    <>
        <div className="mx-2 mt-2"><h5>Tackler</h5></div>
        <select {...register("tackler")} className="col-10 col-sm-3">
            <option value="-">-</option>
            <option value="25">25</option>
            <option value="39">39</option>
            <option value="51">51</option>
            <option value="55">55</option>
            <option value="90">90</option>
            <option value="97">97</option>
            
        </select>
    </>
  )
}

export default Tackler
