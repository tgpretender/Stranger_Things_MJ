import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import { 
    Header,
    Register,
    Login,
    GetData,
    NewPost
} from './components';

const App = () => {
    const baseURL = 'https://strangers-things.herokuapp.com/api/2105-vpi-web-pt'

    const [ isAuthenticated, setIsAuthenticated ] = useState(false);
    const [ userToken, setUserToken ] = useState("");
    const [ userName, setUserName ] = useState("Bob")

    return <div className="app">
        <Header isAuthenticated={isAuthenticated} userName={userName} />
        <main>
           <GetData baseURL={baseURL} />
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