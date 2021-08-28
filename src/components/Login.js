import { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

const Login = (props) => {
    const { baseURL, setUserToken, setUserName, setIsAuthenticated } = props;
    const [ loginUsername, setLoginUsername ] = useState("");
    const [ loginPassword, setLoginPassword ] = useState("");
    const [ regUsername, setRegUsername ] = useState("");
    const [ regPassword, setRegPassword ] = useState("");
    const [ logOrReg, setLogOrReg ] = useState(true);

    
    function loginUser(user,pass) {
        event.preventDefault();

        fetch(`${baseURL}/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user: {
                    username: user,
                    password: pass
                }
            })
        })
        .then(res => res.json())
        .then((result) => { 
            if(result.success === true){
                setIsAuthenticated(true);
                setUserToken(result.data.token);
                setUserName(user);

                if(!localStorage.getItem("usertoken")){
                    localStorage.setItem("usertoken", result.data.token);
                }
                
                if(!localStorage.getItem("username")){
                    localStorage.setItem("username", user);
                }
                
                if(!localStorage.getItem("isLoggedIn")){
                    localStorage.setItem("isLoggedIn", true);
                }
            } else {
                alert("The username and password do not match our records. Please try again!");
            }
        })
        .catch(err => console.error(err))
        
    }

    function registerUser(user, pass) {
        event.preventDefault();
        
        fetch(`${baseURL}/users/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user: {
                    username: user,
                    password: pass
                }
            })
        })
        .then(res => res.json())
        .then((result) => { 
            if(result.success === true){
                setIsAuthenticated(true);
                setUserToken(result.data.token);
                setUserName(user);

                if(!localStorage.getItem("usertoken")){
                    localStorage.setItem("usertoken", result.data.token);
                }
                
                if(!localStorage.getItem("username")){
                    localStorage.setItem("username", user);
                }
                
                if(!localStorage.getItem("isLoggedIn")){
                    localStorage.setItem("isLoggedIn", true);
                }
            }else {
                alert("This user is already created or there is an empty field. Try again!");
            }
        })
        .catch(err => console.error(err))
    }

    const loginForm = (
        <section className="login">
            <h1>Please log in to post!</h1>
            <form onSubmit={() => {loginUser(loginUsername,loginPassword)}}>
                <div>
                    <label>Username: </label>
                    <input id="loginUsernameInput" 
                        type="type"
                        name="loginUsername"
                        value={loginUsername}
                        onChange={(e) => setLoginUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label>Password: </label>
                    <input id="loginPasswordInput" 
                        type="type"
                        name="loginPassword"
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)} 
                    />
                </div>
                <button className="logButton" onClick={() => loginUser(loginUsername,loginPassword)}>Login</button>
                </form>
                <br /><br />
                <p>Not a member?</p>
                <button className="regButton" onClick={() => setLogOrReg(false)}>Register</button>
                </section>
            );

    const registerForm = (
        <section className="register">
            <h1>Please register to post!</h1>
            <form onSubmit={() => {registerUser(regUsername, regPassword)}} >
                <div>
                    <label>Username: </label>
                    <input id="usernameInput" 
                        type="type"
                        name="username"
                        value={regUsername}
                        onChange={(e) => setRegUsername(e.target.value)} 
                    />
                </div>
                <div>
                    <label>Password: </label>
                    <input id="passwordInput" 
                        type="type"
                        name="password"
                        value={regPassword}
                        onChange={(e) => setRegPassword(e.target.value)} 
                    />
                </div>            
                <button onClick={() => registerUser(regUsername,regPassword)}>Register</button>
            </form>
        </section>
    );

    return logOrReg ? loginForm : registerForm
}

export default Login;