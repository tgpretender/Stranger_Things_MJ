import { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';


const Login = (props) => {
    const { baseURL, setUserToken, setUserName, setIsAuthenticated } = props;
    const [ loginUsername, setLoginUsername ] = useState("");
    const [ loginPassword, setLoginPassword ] = useState("");

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
                    const newpost = document.querySelector('.newPost');
                    newpost.style.display = 'inline';
                    const loginElement = document.querySelector('.login');
                    loginElement.style.display='none';
            } else {
                alert("Please try again!");
            }
        })
        .catch(err => console.error(err))
        
    }

    return (
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
                            required />
                        </div>
                        <div>
                            <label>Password: </label>
                            <input id="loginPasswordInput" 
                            type="type"
                            name="loginPassword"
                            value={loginPassword}
                            onChange={(e) => setLoginPassword(e.target.value)} 
                            required />
                        </div>
                        <button onClick={() => loginUser(loginUsername,loginPassword)}>Login</button>
                        <br /><br />
                        <p>Not a member?</p>
                        <button onClick={() => {
                            const newpost = document.querySelector('.register');
                            newpost.style.display = 'inline';
                            const loginElement = document.querySelector('.login');
                            loginElement.style.display='none';
                        }}>Register</button>
                    </form>
                </section>
            )
}





export default Login;