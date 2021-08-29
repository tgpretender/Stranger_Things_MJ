import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

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
    const [ showProfile, setShowProfile ] = useState(false);
    const [ searchTerm, setSearchTerm ] = useState('');

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
           { showProfile && <Profile baseURL={baseURL} userToken={userToken} userName={userName} /> }
           { !showProfile && <Posts baseURL={baseURL} userToken={userToken} initialPosts={initialPosts} isAuthenticated={isAuthenticated} /> }
        </main>
        <section id="sidebar">
            { isAuthenticated ? <NewPost baseURL={baseURL} userToken={userToken} isAuthenticated={isAuthenticated}/> : <Login baseURL={baseURL} setUserToken={setUserToken} setUserName={setUserName} setIsAuthenticated={setIsAuthenticated} /> }
        </section>
        <footer>
            <div className="search">
                <label>Keyword:&nbsp;</label>
                <br /><br />
                <input id="searchTerm" 
                    type="type"
                    name="searchTerm"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button>Search</button>
        </div>
        </footer>
        </div>
}

ReactDOM.render(<App />, document.getElementById('app'));