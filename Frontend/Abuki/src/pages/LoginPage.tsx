import Login from '../components/Auth/Login'
import "./Login.css"
const LoginPage = () => {
  return (
    <div className="Login">
      <Login Submit={(data) => console.log(data)} />
    </div>
  )
}

export default LoginPage
