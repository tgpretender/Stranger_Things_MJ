import { useState } from 'react';
import { render } from 'react-dom';

const Search = (props) => {
    const { initialPosts } = props;
    const [ searchTerm, setSearchTerm ] = useState('');
    const [ postMatches, setPostMatches ] = useState('')

    // async function renderSearch(term) {
    //     initialPosts.forEach((post) => {
    //         event.preventDefault();
    //         const { _id: ID, author: {username}, active, createdAt, description, location, price, title, updatedAt, willDeliver} = post;
    //         const dayCreated = createdAt.slice(0,10);
    //         const timeCreated = createdAt.slice(11,16);
    //         const dayUpdated = updatedAt.slice(0,10);
    //         const timeUpdated = updatedAt.slice(11,16);

    //         if(description.includes(term)) {
    //             console.log(post);
    //         }else if(title.includes(term)) {
    //             console.log(post);
    //         }else if(username.includes(term)) {
    //             console.log(post)
    //         }
            
    //     })        
    // }

    return (
        <div className="search">
        <form>
            <label>Keyword:</label>
            <input className="searc" id="searchTerm" 
                type="type"
                name="searchTerm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            {/* <button onClick={()=> renderSearch("test")}>Submit</button> */}
        </form>
        <div className="return"></div>
        </div>)
}

export default Search;