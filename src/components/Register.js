import React, { useState } from 'react';

//visibility to be controlled by the Register button
//targets CSS property visiblity to switch from visible to hidden

const Register = (props) => {
    const { baseURL } = props;
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");

    function registerUser(user, pass) {
        //event.preventDefault();    

        fetch(`${baseURL}/users/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user: {
                    username: {user},
                    password: {pass}
                }
            })
        })
        .then(res => res.json())
        .then(result => console.log(result))
        .catch(err => console.error(err))
    }
    //if user already exists, make an alert
    //set isAuthenticated to true, set user variables to inputs

    return (
        <section className="register">
            <form onSubmit={(e) => {
                e.preventDefault(); 
                fetch(`${baseURL}/users/register`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        user: {
                            username: {username},
                            password: {password}
                        }
                    })
                })
                .then(res => res.json())
                .then(result => console.log(result))
                .catch(err => console.error(err))
                }}>
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
            </div>
                <button type="submit">Register</button>
            </form>
        </section>
    )
}

export default Register;