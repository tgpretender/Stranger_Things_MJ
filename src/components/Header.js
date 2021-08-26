import React from 'react';

const Header = (props) => {
    const { isAuthenticated, userName, setUserName, setUserToken, setIsAuthenticated } = props;

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
                <button>Log Out</button>
            </nav>
        </header>);
    
    function Logout() {
        setIsAuthenticated(false);
        setUserName("");
        setUserToken("");
        localStorage.setItem("usertoken", null);
        localStorage.setItem("username", null);
    }

    if(!isAuthenticated) {
        return notLoggedIn;
    } else {
        return loggedIn
    }
}

export default Header;