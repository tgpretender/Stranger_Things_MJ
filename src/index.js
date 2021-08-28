import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import { 
    Header,
    Login,
    Posts,
    NewPost,
    Profile,
} from './components';

const App = () => {
    const baseURL = 'https://strangers-things.herokuapp.com/api/2105-vpi-web-pt'
    

    const [ isAuthenticated, setIsAuthenticated ] = useState(localStorage.getItem("isLoggedIn"));
    const [ userToken, setUserToken ] = useState(localStorage.getItem("usertoken"));
    const [ userName, setUserName ] = useState(localStorage.getItem("username"));
    const [ initialPosts, setInitialPosts] = useState([]);
    const [ showProfile, setShowProfile ] = useState(false);

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
    
    return <div className="app">
        <Header isAuthenticated={isAuthenticated} userName={userName} setUserName={setUserName} setUserToken={setUserToken} setIsAuthenticated={setIsAuthenticated} setShowProfile={setShowProfile} />
        <main>
           { showProfile ? <Profile /> : <Posts baseURL={baseURL} userToken={userToken} initialPosts={initialPosts} isAuthenticated={isAuthenticated} /> }
        </main>
        <section id="sidebar">
            { isAuthenticated ? <NewPost baseURL={baseURL} userToken={userToken} isAuthenticated={isAuthenticated}/> : <Login baseURL={baseURL} setUserToken={setUserToken} setUserName={setUserName} setIsAuthenticated={setIsAuthenticated} /> }
        </section>
        <footer>
            This will be for searching
        </footer>
        </div>
}

ReactDOM.render(<App />, document.getElementById('app'));