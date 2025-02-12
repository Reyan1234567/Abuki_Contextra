import axios from "axios";
import Login from "../components/Auth/Login";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginPage = () => {
  const [anError, setError] = useState(false);
  const navigate = useNavigate();
  const Logining = async (data: any) => {
    try {
      const response = await axios.post("http://localhost:9000/login", data);
      if (response.status === 200) {
        console.log(data);
        navigate("/dashboard");
      } else {
        setError(true);
        console.log(anError);
        console.log("some error happend");
        console.log(response.status);
      }
    } catch (err) {
      setError(true);
      setTimeout(() => {
        setError(false)
      }, 2000);
      console.log(err);
    }
  };
  return (
    <div className="Login">
      <Login Submit={(data) => Logining(data)} anError={anError} />
    </div>
  );
};

export default LoginPage;
