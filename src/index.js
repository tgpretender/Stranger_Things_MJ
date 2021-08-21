import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import { 
    Header,
    Register,
    Login,
    NewPost
} from './components';

const App = () => {
    const baseURL = 'https://strangers-things.herokuapp.com/api/2105-vpi-web-pt'

    const [ isAuthenticated, setIsAuthenticated ] = useState(true);
    const [ userToken, setUserToken ] = useState("");
    const [ userName, setUserName ] = useState("Bob")

    return <div className="app">
        <Header isAuthenticated={isAuthenticated} userName={userName} />
        <main>
            This is the main window where posts will appear
        </main>
        <section id="sidebar">
            <Register baseURL={baseURL} setUserToken={setUserToken} setUserName={setUserName} />
            <Login setUserToken={setUserToken} setUserName={setUserName} />
            <NewPost userName={userName} />
        </section>
        <footer>
            This will be for searching
        </footer>
        </div>
}
ReactDOM.render(<App />, document.getElementById('app'));