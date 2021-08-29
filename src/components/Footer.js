import { useState } from 'react';
import { NavLink } from "react-router-dom";

const Footer = (props) => {
    const { searchTerm, setSearchTerm } = props;

    return(<footer>
            <div className="search">
                <form>
                    <label>Keyword:</label>
                    <input id="searchTerm" 
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

