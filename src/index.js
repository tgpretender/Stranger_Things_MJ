import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import { 
    Header,
    Register,
    Login,
    NewPost
} from './components';

const App = () => {
    const baseURL = 'https://strangers-things.herokuapp.com/api/2105-vpi-web-pt/posts'

    const [ isAuthenticated, setIsAuthenticated ] = useState(false);

    const [posts, setPosts] = useState([]);

    fetch(baseURL) 
        .then(res => res.json())
        .then(result => console.log(result));

       

    return <div className="app">
        <Header isAuthenticated={isAuthenticated}/>
        <main>
            This is the main window where posts will appear
        </main>
        <section id="sidebar">
            <button>Register</button>
            <br /><br />
            <button>Login</button>
            <Register baseURL={baseURL} />
            <Login />
            <NewPost />
        </section>
        <footer>
            This will be for searching
        </footer>
        </div>
}
ReactDOM.render(<App />, document.getElementById('app'));