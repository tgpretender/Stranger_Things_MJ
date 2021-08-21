import React, { useState } from 'react';

//visibility to be controlled by the Register button
//targets CSS property visiblity to switch from visible to hidden

const Register = (props) => {
    const { baseURL, setUserToken } = props;
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
        .then(result => console.log(result))
        .catch(err => console.error(err))
    }
    //if user already exists, make an alert
    //set isAuthenticated to true, set userID to username, set userToken to token

    return (
        <section className="register">
            <form onSubmit={() => {registerUser(username,password)}} >
            <div>
                <label>Username: </label>
                <input id="usernameInput" 
                type="type"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
                <label>Password: </label>
                <input id="passwordInput" 
                type="type"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
            
                <button onClick={() => registerUser(username,password)}>Register</button>
                </div>
            </form>
        </section>
    )
}

export default Register;