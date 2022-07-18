import './login.css'
import { useNavigate } from "react-router-dom";
import { BASE_URL } from '../util/constant'
import { useState, useEffect  } from 'react';
import axios from 'axios';

const Login = () => {

    let navigate = useNavigate();

    var email = "";
    var password = "";

 
    function goToRegister(event) {
        event.preventDefault();
        navigate("../register");
    }

    function goToHome(event) {
        event.preventDefault();
        axios.post(BASE_URL + "/login", {
            email: email,
            password: password
          })
          .then(function (response) {
            console.log(response);
            localStorage.setItem("token", response.data.token);
            navigate("../home");
          })
          .catch(function (error) {
            console.log(error);
            alert(error);
          });
    }

    useEffect(() => {
        var token = localStorage.getItem("token")
      
        if(token != null){
           navigate("../home");          
        }
        
    }, []);

    const readEmail = (event) => {
       email = event.target.value;
    }

    const readPassword = (event) => {
        password =  event.target.value;
    }

    return (
        <div>
            <h1>LOGIN</h1>

             <form>
                <div class="container">
                <label for="uname"><b>Email</b></label>
                <input type="text" onChange={readEmail} placeholder="Enter Email" name="uname" required></input>
                <label for="psw"><b>Password</b></label>
                <input type="password" onChange={readPassword} placeholder="Enter Password" name="psw" required></input>
                <button type="submit" onClick={goToHome}>Login</button>
                <button type="submit" onClick={goToRegister}>Register</button>
                </div>
             </form>

   
        </div>
    );

}


export default Login;