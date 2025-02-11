import axios from 'axios'
import Login from '../components/Auth/Login'
import "./Login.css"
import { useNavigate } from 'react-router-dom'


const LoginPage = () => {
  const navigate=useNavigate()
  const Logining=async(data:any)=>{
    const response=await axios.post("http://localhost:9000/login",data)
    if(response.status===201){
      console.log(data)
      navigate("/dashboard")
    }
  else{
    console.log("some error happend")
  }
  }
  return (
    <div className="Login">
      <Login Submit={(data) => Logining(data)} />
    </div>
  )
}

export default LoginPage
