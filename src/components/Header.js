import React from 'react';
import { Link } from "react-router-dom";


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
            { isAuthenticated && 
                <nav>
                    <Link className="NavLink" exact to="/">Home</Link>
                    <Link className="NavLink" to="/posts">Posts</Link>
                    <Link className="NavLink" to="/profile">Profile</Link>
                    <button onClick={() => Logout()}>Log Out</button>
                </nav> 
            } 
            { !isAuthenticated && 
                <nav>
                    <Link className="NavLink" exact to="/">Home</Link>
                    <Link className="NavLink" to="/posts">Posts</Link>
                </nav> 
            }
        </header>)

}

export default Header;