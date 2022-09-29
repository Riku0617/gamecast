import { Props2 } from './Alies';



const KickDistamce :React.FC<Props2> = ({register,value}) => {
    if (value.o_or_k === "Kick Off"){
      return (
        <>
            <div className="mx-2 mt-2"><h5>Kick Distance</h5></div>
            <input type="number" {...register("kick_distance",{ setValueAs: (value) => parseInt(value), })} className="col-10 col-sm-3"/>
        </>
      )
    }
    return null
  }

export default KickDistamce