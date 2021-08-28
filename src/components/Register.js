import React, { useState } from 'react';

const Register = (props) => {
    const { baseURL, setUserToken, setUserName, setIsAuthenticated } = props;
    const [ regUsername, setRegUsername ] = useState("");
    const [ regPassword, setRegPassword ] = useState("");

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
                alert("Please try again!");
            }
        })
        .catch(err => console.error(err))
    }

    return (
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
                required />
            </div>
            <div>
                <label>Password: </label>
                <input id="passwordInput" 
                type="type"
                name="password"
                value={regPassword}
                onChange={(e) => setRegPassword(e.target.value)} 
                required />
                </div>            
                <button onClick={() => registerUser(regUsername,regPassword)}>Register</button>
            </form>
        </section>
    )
}

export default Register;