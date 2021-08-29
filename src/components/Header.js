import React from 'react';
import { NavLink } from "react-router-dom";


const Header = (props) => {
    const { isAuthenticated, userName, setUserName, setUserToken, setIsAuthenticated, setShowPosts, setShowProfile, setShowSearch, setShowHome } = props;
    
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
                    <NavLink className="NavLink" exact to="/">Home</NavLink>
                    <NavLink className="NavLink" to="/posts">Posts</NavLink>
                    <NavLink className="NavLink" to="/profile">Profile</NavLink>
                    <button onClick={() => Logout()}>Log Out</button>
                </nav> 
            } 
            { !isAuthenticated && 
                <nav>
                    <NavLink className="NavLink" exact to="/">Home</NavLink>
                    <NavLink className="NavLink" to="/posts">Posts</NavLink>
                </nav> 
            }
        </header>)

}

export default Header;