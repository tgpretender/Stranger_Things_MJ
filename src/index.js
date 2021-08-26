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
    NewPost,
    Profile
} from './components';

const App = () => {
    const baseURL = 'https://strangers-things.herokuapp.com/api/2105-vpi-web-pt'

    const [ isAuthenticated, setIsAuthenticated ] = useState(localStorage.getItem("isLoggedIn"));
    const [ userToken, setUserToken ] = useState(localStorage.getItem("usertoken"));
    const [ userName, setUserName ] = useState(localStorage.getItem("username"))

    return <div className="app">
        <Header isAuthenticated={isAuthenticated} userName={userName} setUserName={setUserName} setUserToken={setUserToken} setIsAuthenticated={setIsAuthenticated}/>
        <main>
            <h1>Glad to see you at Stranger's Things!</h1>
        </main>
        <section id="sidebar">
            <Register baseURL={baseURL} setUserToken={setUserToken} setUserName={setUserName} setIsAuthenticated={setIsAuthenticated} />
            <Login baseURL={baseURL} setUserToken={setUserToken} setUserName={setUserName} setIsAuthenticated={setIsAuthenticated} />
            <NewPost baseURL={baseURL} userName={userName} isAuthenticated={isAuthenticated}/>
        </section>
        <footer>
            This will be for searching
        </footer>
        </div>
}

ReactDOM.render(<App />, document.getElementById('app'));