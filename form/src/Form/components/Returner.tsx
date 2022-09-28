import { Props2 } from './Alies';


const Returner:React.FC<Props2> = ({register,value}) => {
  if (value.o_or_k === "Punt" || value.o_or_k === "Kick Off"){
    return (
      <>
          <div className="mx-2 mt-2"><h5>Returner</h5></div>
              <select {...register("returner")} className="col-10 col-sm-3">
                  <option value="">-</option>
                  <option value="13">84</option>
              </select>
      </>
    )
  }
  return null
}


export default Returner
