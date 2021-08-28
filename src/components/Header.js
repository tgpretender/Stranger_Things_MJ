import React from 'react';


const Header = (props) => {
    const { isAuthenticated, userName, setUserName, setUserToken, setIsAuthenticated } = props;
    
    function Logout() {
        setIsAuthenticated(false);
        setUserName("");
        setUserToken("");

        localStorage.removeItem("usertoken");
        localStorage.removeItem("username");
        localStorage.removeItem("isLoggedIn");

        location.reload();
    }

    return (
        <header>
        <img src="http://placekitten.com/80/80" />
            { isAuthenticated ? <h1>Welcome, {userName}!</h1> : <h1>Welcome!</h1> }
            { isAuthenticated ? <nav><button>Home</button><button>Posts</button><button>Profile</button><button onClick={() => Logout()}>Log Out</button></nav> : <nav><button>Home</button><button>Posts</button></nav> }
        </header>)

}

export default Header;