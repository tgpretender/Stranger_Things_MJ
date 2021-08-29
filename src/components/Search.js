import React from 'react';

const Search = (props) => {
    const { searchTerm, initialPosts } = props;

    async function postMatches() {
        console.log(searchTerm);

        initialPosts.forEach(post =>{
            const { _id: ID, author: {username}, active, createdAt, description, location, price, title, updatedAt, willDeliver} = post;
            const dayCreated = createdAt.slice(0,10);
            const timeCreated = createdAt.slice(11,16);
            const dayUpdated = updatedAt.slice(0,10);
            const timeUpdated = updatedAt.slice(11,16);

            if(description.includes(searchTerm)){;
                console.log(post)
                
            }
        })
    }

    

    return null;
}

export default Search;