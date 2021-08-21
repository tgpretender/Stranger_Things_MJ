import { userState } from 'react';
import { Link, Redirect } from 'react-router-dom';

//visibility to be controlled by the Login button
//targets CSS property visiblity to switch from visible to hidden

const Login = (props) => {
    const { baseURL, setUserToken, setUserName, setIsAuthenticated } = props;
//const [ loginSuccessful, setLoginSuccessful ] = useState(false);
//why does this break the code...??????

    function authenticate() {
        event.preventDefault();

        if(username.length != 0 && password.length !=0) {
            //validate data
            //make ajax request to the backend
            //backend will return a response letting us know if user was authenticated
            //if authenticated:
            //setIsAuthenticated(true);

            
        } else {
            console.log('not valid username and/or password')
            //set up an alert message
        }
        
    }

    // if(loginSuccessful) {
    //     //conditionally don’t render the Login option now, show Logout option
    //     return <Redirect to="/" />
    // } else {
        //all the normal return stuff
    //     )

    return (
                <section className="login">
                    <form onSubmit={authenticate}>
                        <div>
                            <label>Username: </label>
                            <input id="usernameInput" 
                            type="type"
                            name="usernameInput" />
                        </div>
                        <div>
                            <label>Password: </label>
                            <input id="passwordInput" 
                            type="type"
                            name="passwordInput" />
                        </div>
                        <button type="submit">Login</button>
                        <p>Not a member?</p>
                        <button>Register</button>
                        {/* <Link to="/register" class="linkBtn">Register</Link> */}
                    </form>
                </section>
            )
}





export default Login;