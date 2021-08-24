import { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';


const Login = (props) => {
    const { baseURL, setUserToken, setUserName, setIsAuthenticated } = props;
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");

    function loginUser(user,pass) {
        event.preventDefault();

        fetch(`${baseURL}/users/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTIxODhkYTZjYzIzNDAwMTcxN2EzZmUiLCJ1c2VybmFtZSI6IkphbWVzIiwiaWF0IjoxNjI5NTg3Njc0fQ.s75BRbhX5bWj_LqfGm98YvHaMeEUHLzG30eDcx8DJqs'
            },
            body: JSON.stringify({
                user: {
                    username: "James",
                    password: "Pass"
                }
            })
        })
        .then(res => res.json())
        .then((result) => { 
            console.log(result);
            // const success = result.success;
            // if(success){
            //     console.log(result);
            //     // setUserName(user);
            //     // setUserToken(result.data.token);
            //     // setIsAuthenticated(true);
            //     //set visibility of Register to hidden?
            // }else {
            //     alert("Please try again!");
            // }
        })
        .catch(err => console.error(err))
        
    }

    return (
                <section className="login">
                    <h1>Please log in to post!</h1>
                    <form onSubmit={() => {loginUser(username,password)}}>
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
                        <button onClick={() => loginUser(username,password)}>Login</button>
                        <br /><br />
                        <p>Not a member?</p>
                        <button>Register</button>
                        {/* <Link to="/register" class="linkBtn">Register</Link> */}
                    </form>
                </section>
            )
}





export default Login;