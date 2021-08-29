import { useState } from 'react';

const Search = () => {
    const [posts, setPosts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    function postMatches(post, text) {
  // return true if any of the fields you want to check against include the text
  // strings have an .includes() method 
    }

    const filteredPosts = posts.filter(post => postMatches(post, searchTerm));
    const postsToDisplay = searchTerm.length ? filteredPosts : posts;

// then, in our jsx below... map over postsToDisplay instead of posts




    return (
        <div className="search">
            <label>Search Posts: </label>
            <br /><br />
            <input id="searchTerm" 
                type="type"
                name="searchTerm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
    );
}

export default Search;