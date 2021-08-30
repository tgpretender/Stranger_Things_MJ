import { useState } from 'react';

const Search = (props) => {
    const { initialPosts } = props;
    const [ searchTerm, setSearchTerm ] = useState('');
    const [ postMatches, setPostMatches ] = useState([])

    async function renderSearch(term) {
        event.preventDefault();
        setPostMatches([]);
        const tempPosts = [];

        initialPosts.forEach((post) => {
            const { author: {username}, description, title} = post;
            if(description.includes(term)) {
                tempPosts.push(post);
            }else if(title.includes(term)) {
                tempPosts.push(post);
            }else if(username.includes(term)) {
                tempPosts.push(post);
            }
        });

        setPostMatches(tempPosts);
    }

    return (
        <div className="search">
            <h2>Search by title, description, or poster's name</h2>
        <form>
            <label>Keyword:</label>
            <input className="searc" id="searchTerm" 
                type="type"
                name="searchTerm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={()=> renderSearch(searchTerm)}>Submit</button>
        </form>
        <div className="return">
        {postMatches.map((post, index) => {
                    const { author: {username}, active, createdAt, description, location, price, title, updatedAt, willDeliver} = post;
                    const dayCreated = createdAt.slice(0,10);
                    const timeCreated = createdAt.slice(11,16);
                    const dayUpdated = updatedAt.slice(0,10);
                    const timeUpdated = updatedAt.slice(11,16);
                    if(active) {
                    return (<div key={index} className="post">
                                <div className="postHeading">
                                    <div className="title">{title}</div>
                                    <div className="author">{username}</div>
                                </div>
                                <div className="description">{description}</div>
                                <div className="details">
                                    <p><b>Location</b>: {location}</p>
                                    <p><b>Price:</b> {price}</p>
                                    <p><b>Will Deliver:</b> {willDeliver ? 'Yes' : 'No'}</p>
                                    <br />
                                    <p><b>Created:</b> {dayCreated}, {timeCreated}</p>
                                    <p><b>Updated:</b> {dayUpdated}, {timeUpdated}</p>
                                    <br />
                                </div>
                            </div>)}
                })}
        </div>
        </div>)
}

export default Search;