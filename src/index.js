import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useEffect } from 'react/cjs/react.production.min';

import { 
    Header,
    Register,
    Login,
    NewPost
} from './components';

const App = () => {
    const baseURL = 'https://strangers-things.herokuapp.com/api/2105-vpi-web-pt'
    const [ isAuthenticated, setIsAuthenticated ] = useState(false);
    const [posts, setPosts] = useState([]);
    const [ userToken, setUserToken ] = useState("");
    const [ userName, setUserName ] = useState("Bob")

   
     async function getData () => {
        const resp = await fetch('https://strangers-things.herokuapp.com/api/2105-vpi-web-pt');
        const data = await resp.json();
        console.log('data: ', data)
        setPosts(data);
    }
   
   
       
    

    return <div className="app">
        <Header isAuthenticated={isAuthenticated} userName={userName} />
        <main>
            This is the main window where posts will appear
        </main>
        <section id="sidebar">
            <Register baseURL={baseURL} setUserToken={setUserToken} setUserName={setUserName} setIsAuthenticated={setIsAuthenticated} />
            <Login baseURL={baseURL} setUserToken={setUserToken} setUserName={setUserName} setIsAuthenticated={setIsAuthenticated} />
            <NewPost userName={userName} />
        </section>
        <footer>
            This will be for searching
        </footer>
        </div>
}
ReactDOM.render(<App />, document.getElementById('app'));