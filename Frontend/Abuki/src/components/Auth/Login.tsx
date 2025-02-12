import {useForm} from "react-hook-form";

interface auth{
    username:string;
    password:string;
}

interface Props{
    Submit:(data:auth)=>void;
    anError:boolean;
}

const Login = ({Submit, anError}:Props) => {

  
  const {
    register,
    handleSubmit,
    formState: {isValid, errors},
  } =useForm();

  return (
    <form onSubmit={handleSubmit((data)=>Submit(data as auth))} className="container p-5 h-100 d-flex flex-column justify-content-center align-items-center bg-light" style={{ backgroundColor: "#f8f9fa", borderRadius: "8px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}>
      <div className="mb-3 w-100">
      <label className="form-label" htmlFor="username">
        Username:
      </label>
      <input
        {...register("username",{required:true})}
        className="form-control"
        type="text"
        id="username"
        name="username"
      />
      {errors.username&&<p className="text-danger">Username is required</p>}
      </div>
      <div className="mb-3 w-100">
      <label className="form-label" htmlFor="password">
        Password:
      </label>
      <input
        {...register("password",{required:true})}   
        className="form-control"
        type="password"
        id="password"
        name="password"
      />
      {errors.password&&<p className="text-danger">Password is required</p>}
      </div>
      {anError&&<p className="text-danger">Incorrect Credentials</p>}
      <button className="btn btn-warning mt-3 text-black" type="submit">
      Login
      </button>
      
    </form>
  );
};

export default Login;

// disabled={!isValid}
