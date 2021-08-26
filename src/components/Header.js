import React from 'react';

const Header = (props) => {
    const { isAuthenticated, userName, setUserName, setUserToken, setIsAuthenticated } = props;

    //clean this up later for version without repeating the header code, just the buttons. ternary?

    const notLoggedIn = (
        <header>
            <img src="http://placekitten.com/80/80" />
            <h1>Welcome!</h1>
            <nav>
                <button>Home</button>
                <button>Posts</button>
            </nav>
        </header>);

    const loggedIn = (
        <header>
            <img src="http://placekitten.com/80/80" />
            <h1>Welcome, {userName}!</h1>
            <nav>
                <button>Home</button>
                <button>Posts</button>
                <button>Profile</button>
                <button onClick={() => Logout()}>Log Out</button>
            </nav>
        </header>);
    
    function Logout() {
        setIsAuthenticated(false);
        setUserName("");
        setUserToken("");
        localStorage.removeItem("usertoken");
        localStorage.removeItem("username");
        localStorage.removeItem("isLoggedIn");
    }

    if(!isAuthenticated) {
        return notLoggedIn;
    } else {
        return loggedIn
    }
}

export default Header;