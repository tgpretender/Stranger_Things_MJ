import { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';


const Login = (props) => {
    const { baseURL, setUserToken, setUserName, setIsAuthenticated } = props;
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");

    
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

                //set visibility toggle
                //set logic for the Register button
            } else {
                alert("Please try again!");
            }
        })
        .catch(err => console.error(err))
        
    }

    return (
                <section className="login">
                    <h1>Please log in to post!</h1>
                    <form onSubmit={() => {loginUser(username,password)}}>
                        <div>
                            <label>Username: </label>
                            <input id="loginUsernameInput" 
                            type="type"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required />
                        </div>
                        <div>
                            <label>Password: </label>
                            <input id="loginPasswordInput" 
                            type="type"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} 
                            required />
                        </div>
                        <button onClick={() => loginUser(username,password)}>Login</button>
                        <br /><br />
                        <p>Not a member?</p>
                        <button>Register</button>
                        {/* <Link to="/register" class="linkButton">Register</Link> */}
                    </form>
                </section>
            )
}





export default Login;