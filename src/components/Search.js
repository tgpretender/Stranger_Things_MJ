import React from 'react';

const Search = (props) => {
    const { searchTerm, initialPosts } = props;


    initialPosts.map(post => {
        const title = post["title"]
        const desc = post["description"];
        const author = post["author"];
        const user = author["username"];  
        })


    return <h1>Search Results</h1>
}

export default Search;