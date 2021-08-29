import { useState } from 'react';

const Search = () => {
    const [posts, setPosts] = useState([]);


    function postMatches(post, text) {
  // return true if any of the fields you want to check against include the text
  // strings have an .includes() method 
    }

    const filteredPosts = posts.filter(post => postMatches(post, searchTerm));
    const postsToDisplay = searchTerm.length ? filteredPosts : posts;

// then, in our jsx below... map over postsToDisplay instead of posts




    return <h1>Search Results</h1>;
}

export default Search;