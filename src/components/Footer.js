import { useState } from 'react';
import { NavLink } from "react-router-dom";

const Footer = (props) => {
    const { searchTerm, setSearchTerm, initialPosts, setPostMatches } = props;


    async function postMatches() {
    
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

    return(<footer>
            <div className="search">
                <form>
                    <label>Keyword:</label>
                    <input className="searc" id="searchTerm" 
                        type="type"
                        name="searchTerm"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <NavLink className="NavLink" exact to="/search">Search</NavLink>
                </form>
            </div>
        </footer>)
}
export default Footer

