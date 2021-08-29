import { useState} from 'react'

const Posts = (props) => {
    const {baseURL, userName, userToken, initialPosts, isAuthenticated} = props;
    const [ showEditBlock, setShowEditBlock ] = useState(false);
    const [ newMessage, setNewMessage ] = useState("")

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

    async function Edit(ID) {
        const postID = ID.ID;

        const response = await fetch(`${baseURL}/posts/${postID}`, {
            method: "PATCH",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${userToken}`
            }
        })
            .then(res => res.json())
            .then((result) => { 
                if(result.success === true){
                    return console.log("can edit")
                } else {
                    alert("You do not have permission to edit this post!");
                }
            })
            .catch(err => console.error(err));


    }

    return initialPosts.map((post, index) => {
        const { _id: ID, author: {username, _id: userID}, createdAt, description, location, price, title, updatedAt, willDeliver} = post;
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
                            <button onClick={() => setShowEditBlock(true)}>Edit</button>
                            <button onClick={() => Delete({ID})}>Delete</button> 
                            <button>Message</button>
                        </div>
                    }
                    { showEditBlock && <div key={index} className="editBlock">
                        
                            <label>New Description: </label><br />
                            <textarea is="message" 
                                type="text"
                                name="message"
                                rows="5"
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)} />
                            <button onClick={() => Edit({ID})}>Submit</button>
                        </div>
                    }
                </div>)
        });
}

export default Posts