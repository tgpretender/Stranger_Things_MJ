import { useState, useEffect } from 'react';

const Profile = (props) => {
    const { baseURL, userToken, userName } = props;
    const [ userPosts, setUserPosts ] = useState([]);
    const [ userMessages, setUserMessages ] = useState([]);

    useEffect(() => {
        fetch(`${baseURL}/users/me`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${userToken}`
            }
        })
        .then(res => res.json())
        .then((result) => {
            const response = result.data;
            setUserPosts(response.posts)
            setUserMessages(response.messages)
        })
        .catch(err => console.error(err))
    }, []);

        userPosts.forEach(posts => {

        });

    return (<div className="profile">
            <h1>{userName}'s Profile</h1>

            <div className="profilePosts">
                <h2>My Posts</h2>
                {userPosts.map((post, index) => {
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
                })}
            </div>
            <div className="profileMessages">
                <h2>My Messages</h2>
                { userMessages.map((message,index) => {
                    <div className="message">Message</div>
                })}
            </div>
        </div>)
}

export default Profile;