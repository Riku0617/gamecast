import { Props2 } from './Alies';



const Punter :React.FC<Props2> = ({register,value}) => {
  if (value.o_or_k === "Punt" || value.o_or_k ==="Safety Punt"){
    return (
      <>
          <div className="mx-2 mt-2"><h5>Punter</h5></div>
              <select {...register("punter")} className="col-10 col-sm-3">
                  <option value="0">-</option>
                  <option value="13">6</option>
              </select>
      </>
    )
  }
  return null
}

export default Punter
