import React from 'react'

const Posts = (props) => {
    const {baseURL, userToken, initialPosts, isAuthenticated} = props;

    async function Delete(ID) {
        const postID = ID.ID;

        const response = await fetch(`${baseURL}/posts/${postID}`, {
            method: "DELETE",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${userToken}`
            }
        })
            .then(res => res.json())
            .then((result) => { 
                if(result.success === true){
                    return location.reload()
                } else {
                    alert("You do not have permission to delete this post!");
                }
            })
            .catch(err => console.error(err));
    }

    return initialPosts.map((post, index) => {
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
                    { isAuthenticated &&
                        <div className="interact">
                            {/* Stretch: <button>Edit</button> */}
                            <button onClick={() => Delete({ID})}>Delete</button> 
                            <button>Message</button>
                        </div>
                    }
                </div>)
        });
}

export default Posts