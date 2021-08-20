import React from 'react';

//visibility to be controlled by the Register button
//targets CSS property visiblity to switch from visible to hidden

const Register = (props) => {
    const { baseURL } = props;

    const regUser = () => {
        fetch(`${baseURL}/users/register`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user: {
                    "username": {username},
                    "password": {password}
                }
            })
        })
        .then(res => res.json())
        .then(result => console.log(result))
        .catch(err => console.error(err))
    }
    //if above POST works, turn isAuthenticated to true
    //use setIsAuthenticated?

    //in confirm button onClick code, make sure it checks for stuff typed into it, otherwise give an error alert to the user
    //set input values as username and password variables to pass through regUser

    return <div id="register">
        <h2>Please register to post:</h2>
        <h3>Username</h3>
        <input 
        id="username" 
        type="text"
        placeholder="Enter username..." />
        <h3>Password</h3>
        <input 
        id="password" 
        type="text" 
        placeholder="Enter username..."/>
        <br />
        <button>CONFIRM</button>
        </div>
}

export default Register;