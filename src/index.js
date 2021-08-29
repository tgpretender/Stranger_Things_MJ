import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';

import { 
    Header,
    Login,
    Posts,
    NewPost,
    Profile,
    Search
} from './components';

const App = () => {
    const baseURL = 'https://strangers-things.herokuapp.com/api/2105-vpi-web-pt'
    const [ isAuthenticated, setIsAuthenticated ] = useState(localStorage.getItem("isLoggedIn"));
    const [ userToken, setUserToken ] = useState(localStorage.getItem("usertoken"));
    const [ userName, setUserName ] = useState(localStorage.getItem("username"));
    const [ initialPosts, setInitialPosts] = useState([]);

    useEffect(() => {
        fetch(`${baseURL}/posts`, {
            method: "GET",
            headers: {
                'Content-Type': "application/json"
            }
        })
        .then(res => res.json())
        .then((result) => {
            const response = result.data.posts;
            setInitialPosts(response);
        })
        .catch(err => console.error(err))
    }, []);

    
    return <Router><div className="app">
        <Header isAuthenticated={isAuthenticated} userName={userName} setUserName={setUserName} setUserToken={setUserToken} setIsAuthenticated={setIsAuthenticated} />
        <main>
            <Switch>

                <Route exact path="/">
                    <h1>Glad to have you at Stranger's Things!</h1>
                </Route>
                <Route path="/profile">
                    <Profile baseURL={baseURL} userToken={userToken} userName={userName} />
                </Route>
                <Route path="/posts">
                    <Posts baseURL={baseURL} userName={userName} userToken={userToken} initialPosts={initialPosts} isAuthenticated={isAuthenticated} />
                </Route>
                <Route path="/search">
                    <Search initialPosts={initialPosts}/>
                </Route>
                <Route>
                    <h1>404 Page not found!</h1>
                </Route>
            </Switch>
        </main>
        <section id="sidebar">
            { isAuthenticated ? <NewPost baseURL={baseURL} userToken={userToken} isAuthenticated={isAuthenticated}/> : <Login baseURL={baseURL} setUserToken={setUserToken} setUserName={setUserName} setIsAuthenticated={setIsAuthenticated} /> }
        </section>
        <footer>
            <NavLink className="NavLink" exact to="/search">Search Posts</NavLink>
        </footer>
        </div></Router>
}
const home = () => (
    <h1>Showing Home</h1>
)
const prof = () => (
	<h1>Showing Profile</h1>
)
const post =() => (
    <h1>Showing Posts</h1>
)
const search =() => (
    <h1>Showing SearchResults</h1>
)

ReactDOM.render(<App />, document.getElementById('app'));