import "./App.css"
import {useForm} from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState:{errors}}=useForm();

    function onSubmit(data){
      console.log(data);
    }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} >
        <div>
          <label> First Name</label>
          <input className="err-box" {...register("firstName",
          {
            required:true,
            minLength:{ value:3, message:"minimun length shoule be 3"}
            ,maxLength:6})}/>
            {errors.firstName && <p  className="err-mssg">{errors.firstName.message}</p>}
          </div>
          <div>
          <label> Middle Name</label>
          <input className="err-box" {...register("middleName",{
            required:true,
            minLength:{ value:3, message:"minimun length shoule be 3"}
            ,maxLength:6})}/>
            {errors.middleName && <p className="err-mssg">{errors.middleName.message}</p>}
          </div>
          <div>
          <label> Last Name</label>
          <input className="err-box" {...register("lastName"
            ,{
              required:true,
              minLength:{
                value:3 , 
                message:"length should be atleast 3"
              },
              pattern:{
                value:/^[A-Za-z]+$/i,
                message:"invalid format"
              }
            }
          )}/>
          {errors.lastName && <p className="err-mssg">{errors.lastName.message}</p>}
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
      </form>
    </>
  )
}

export default App
