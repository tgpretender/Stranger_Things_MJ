import React from 'react';

// contains a logo on left side
// nav is in upper right corner
// color scheme? 

const Header = (props) => {
    const { isAuthenticated } = props;
    const userID = "Example";
    //pass the userID as props from index.js
    
    if(!isAuthenticated) {
        return (<header>
                <h1>Welcome!</h1>
                <nav>
                    <button>Home</button>
                    <button>Posts</button>
                </nav>
            </header>)
    } else {
        return (<header>
            <h1>Welcome, {userID}!</h1>
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