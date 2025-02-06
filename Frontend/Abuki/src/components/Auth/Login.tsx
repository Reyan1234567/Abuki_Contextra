import {useForm} from "react-hook-form";

interface auth{
    username:string;
    password:string;
}

interface Props{
    Submit:(data:auth)=>void;
}

const Login = ({Submit}:Props) => {

    
  const {
    register,
    handleSubmit,
    formState: {isValid },
  } =useForm();
  return (
    <form onSubmit={handleSubmit((data)=>Submit(data))} className="container p-5 h-100 d-flex flex-column justify-content-center align-items-center bg-light" style={{ backgroundColor: "#f8f9fa", borderRadius: "8px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}>
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
        required
      />
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
        required
      />
      </div>
      <button disabled={!isValid} className="btn btn-primary mt-3" type="submit">
      Login
      </button>
    </form>
  );
};

export default Login;
