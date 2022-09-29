import { Props2 } from './Alies';



const Kicker:React.FC<Props2> = ({register,value}) => {
    if (value.o_or_k === "Kick Off" || value.o_or_k==="FG"){
      return (
        <>
            <div className="mx-2 mt-2"><h5>Kicker</h5></div>
                <select {...register("kicker")} className="col-10 col-sm-3">
                    <option value="0">-</option>
                    <option value="9">9</option>
                </select>
        </>
      )
    }
    return null
}

export default Kicker
