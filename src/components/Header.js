import React from 'react';

// contains a logo on left side
// nav is in upper right corner
// color scheme? 

const Header = (props) => {
    const { isAuthenticated, userName } = props;
    
    if(!isAuthenticated) {
        return (<header>
                <img src="http://placekitten.com/80/80" />
                <h1>Welcome!</h1>
                <nav>
                    <button>Home</button>
                    <button>Posts</button>
                </nav>
            </header>)
    } else {
        return (<header>
            <img src="http://placekitten.com/80/80" />
            <h1>Welcome, {userName}!</h1>
            <nav>
                <button>Home</button>
                <button>Posts</button>
                <button>Profile</button>
                <button>Log Out</button>
            </nav>
        </header>)
    }
}

export default Header;