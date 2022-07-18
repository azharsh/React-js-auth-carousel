import './register.css'
import { useNavigate } from "react-router-dom";
import { BASE_URL } from '../util/constant'
import axios from 'axios';


const Register = () => {

    let navigate = useNavigate();

    var email = "";
    var name = "";
    var password = "";

    
    function doRegister(event) {
        event.preventDefault();
        axios.post(BASE_URL + "/register", {
            email: email,
            name: name,
            password: password
          })
          .then(function (response) {
            console.log(response);
            navigate("../home");
          })
          .catch(function (error) {
            console.log(error.message);
            alert(error);
          });
    }


    const readEmail = (event) => {
        email = event.target.value;
    }

    const readName = (event) => {
        name =  event.target.value;
   }
 
    const readPassword = (event) => {
         password =  event.target.value;
    }

    return (
        <div>

            <h1>Register</h1>

            <form>
                <div class="container">
                <label for="uname"><b>Email</b></label>
                <input type="text" onChange={readEmail} placeholder="Enter Email" name="uname" required></input>
                <label for="uname"><b>Name</b></label>
                <input type="text" onChange={readName} placeholder="Enter Name" name="uname" required></input>
                <label for="psw"><b>Password</b></label>
                <input type="password" onChange={readPassword} placeholder="Enter Password" name="psw" required></input>
                <button type="submit" onClick={doRegister}>Register</button>
                </div>
             </form>

        </div>
    );

}


export default Register;