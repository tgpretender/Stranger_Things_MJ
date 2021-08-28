import React, { useState } from 'react';
import ReactDOM from 'react-dom';

//Not being used but leaving in case I change my mind
import { 
    BrowserRouter as Router, 
    Switch, 
    Link, 
    Route, 
    Redirect } from 'react-router-dom';

import { 
    Header,
    Register,
    Login,
    GetData,
    NewPost
} from './components';

const App = () => {
    const baseURL = 'https://strangers-things.herokuapp.com/api/2105-vpi-web-pt'

    const [ isAuthenticated, setIsAuthenticated ] = useState(localStorage.getItem("isLoggedIn"));
    const [ userToken, setUserToken ] = useState(localStorage.getItem("usertoken"));
    const [ userName, setUserName ] = useState(localStorage.getItem("username"))

    if(isAuthenticated) {
        //make sure newPost displays on homepage when user isAuthenticated, not login
        const loginElement = document.getElementsByClassName('.login');
        console.log(loginElement);
        //loginElement.style.display='none';

        //should this be logic baked into Login that it's only visible when authenticated?
        //would that be INSIDE the Login const or before it...?
        //talk to Jay or Kathryn about it
    }
    return <div className="app">
        <Header isAuthenticated={isAuthenticated} userName={userName} setUserName={setUserName} setUserToken={setUserToken} setIsAuthenticated={setIsAuthenticated}/>
        <main>
           <GetData baseURL={baseURL} />
        </main>
        <section id="sidebar">
            <Register baseURL={baseURL} setUserToken={setUserToken} setUserName={setUserName} setIsAuthenticated={setIsAuthenticated} />
            <Login baseURL={baseURL} setUserToken={setUserToken} setUserName={setUserName} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
            <NewPost baseURL={baseURL} userName={userName} isAuthenticated={isAuthenticated}/>
        </section>
        <footer>
            This will be for searching
        </footer>
        </div>
}

ReactDOM.render(<App />, document.getElementById('app'));