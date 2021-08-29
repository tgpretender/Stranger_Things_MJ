import { useState } from 'react';

const Search = (props) => {
    const { searchTerm, initialPosts } = props;
    const [ posts, setPosts ] = useState([]);
    
    initialPosts.map(post => {
        const title = post["title"]
        const desc = post["description"];
        const author = post["author"];
        const user = author["username"];
        const temp = []

        if(title.includes(searchTerm)) {
            temp.push(post);
        } else if(desc.includes(searchTerm)) {
            temp.push(post);
        } else if(user.includes(searchTerm)) {
            temp.push(post);
        }
        
        setPosts(temp);
    })
    console.log(posts);


    return <div className="searchResults">Search Results</div>
}

export default Search;