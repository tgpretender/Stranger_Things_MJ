import React, { useState } from 'react';

const Register = (props) => {
    const { baseURL, setUserToken, setUserName, setIsAuthenticated } = props;
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");

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
            const success = result.success;
            if(success){
                setUserName(user);
                setUserToken(result.data.token);
                setIsAuthenticated(true);
                if(!localStorage.getItem("usertoken")){
                    localStorage.setItem("usertoken", result.data.token);
                } else if (localStorage.getItem("usertoken") !== result.data.token) {
                    localStorage.setItem("usertoken", result.data.token);
                }
                
                if(!localStorage.getItem("username")){
                    localStorage.setItem("username", user);
                } else if (localStorage.getItem("username") !== user) {
                    localStorage.setItem("username", user);
                }
                //set visibility of Register to hidden?
            }else {
                alert("Please try again!");
            }
        })
        .catch(err => console.error(err))
    }

    return (
        <section className="register">
            <h1>Please register to post!</h1>
            <form onSubmit={() => {registerUser(username,password)}} >
            <div>
                <label>Username: </label>
                <input id="usernameInput" 
                type="type"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)} 
                required />
            </div>
            <div>
                <label>Password: </label>
                <input id="passwordInput" 
                type="type"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
                required />
                </div>            
                <button onClick={() => registerUser(username,password)}>Register</button>
            </form>
        </section>
    )
}

export default Register;