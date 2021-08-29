import React from 'react';
import Posts from './Posts';


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

    function PostsButton() {
        setShowPosts(true);
        setShowProfile(false);
        setShowSearch(false);
        setShowHome(false)
    }
    
    function ProfileButton() {
        setShowPosts(false);
        setShowProfile(true);
        setShowSearch(false);
        setShowHome(false)
    }

    return (
        <header>
            <img src="http://placekitten.com/80/80" />
            { isAuthenticated ? <h1>Welcome, {userName}!</h1> : <h1>Welcome!</h1> }
            { isAuthenticated && 
                <nav>
                    <button onClick={() => location.reload()}>Home</button>
                    <button onClick={() => PostsButton()}>Posts</button>
                    <button onClick={() => ProfileButton()}>Profile</button>
                    <button onClick={() => Logout()}>Log Out</button>
                </nav> 
            } 
            { !isAuthenticated && 
                <nav>
                    <button onClick={() => location.reload()}>Home</button>
                    <button onClick={() => PostsButton()}>Posts</button>
                </nav> 
            }
        </header>)

}

export default Header;