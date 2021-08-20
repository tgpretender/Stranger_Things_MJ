import React from 'react';

// contains a logo on left side
// nav is in upper right corner
// color scheme? 

const Header = (props) => {
    const { isAuthenticated } = props;
    
    // nav controls
    if(!isAuthenticated) {
        console.log("Not authenticated")
        // when user is not logged in, header only has Home and Posts buttons
    } else {
        console.log("Authenticated")
        // when user is logged in, has Home, Posts, Profile, Logout
    }

    return <header>This is the header</header>
}

export default Header;