import React from 'react';

const Search = (props) => {
    const { postMatches } = props;

    const renderSearch = () => {

        postMatches.forEach(() => {
            const { _id: ID, author: {username}, active, createdAt, description, location, price, title, updatedAt, willDeliver} = post;
            const dayCreated = createdAt.slice(0,10);
            const timeCreated = createdAt.slice(11,16);
            const dayUpdated = updatedAt.slice(0,10);
            const timeUpdated = updatedAt.slice(11,16);
            
            console.log(title);
        })        
    }

    return <h1>Search</h1>;
}

export default Search;