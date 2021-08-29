import { useState } from 'react';

const Search = (props) => {
    const { searchTerm } = props;
    const [ posts, setPosts ] = useState([]);
    event.preventDefault();



    return (
    <div className="searchResults">
        Post
        {/* { postsToDisplay.map((post, index) => {
                    const { _id: ID, author: {username}, createdAt, description, location, price, title, updatedAt, willDeliver} = post;
                    const dayCreated = createdAt.slice(0,10);
                    const timeCreated = createdAt.slice(11,16);
                    const dayUpdated = updatedAt.slice(0,10);
                    const timeUpdated = updatedAt.slice(11,16);
            
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
                                    <p><b>Created:</b> {dayCreated}, {timeCreated}</p>
                                    <p><b>Updated:</b> {dayUpdated}, {timeUpdated}</p>
                                </div>
                            </div>)
                })} */}
    </div>);
}

export default Search;