import { useState } from 'react';

const Search = (props) => {
    const { searchTerm, initialPosts } = props;
    const [ posts, setPosts ] = useState([]);
    event.preventDefault();
    
    initialPosts.map(post => {
        const title = post["title"]
        const desc = post["description"];
        const author = post["author"];
        const user = author["username"];

        if(title.includes(searchTerm)) {
            return title;
        } else if(desc.includes(searchTerm)) {
            console.log(post);
        } else if(user.includes(searchTerm)) {
            console.log(post);
        } else {
            console.log("No matches");
        }
    })
    

    return null;
}

export default Search;