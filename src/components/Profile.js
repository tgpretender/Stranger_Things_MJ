import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
            setUserPosts(response.posts);
            setUserMessages(response.messages);
            console.log(response.messages);
        })
        .catch(err => console.error(err))
    }, []);

    return (<div className="profile">
            <h1>{userName}'s Profile</h1>
            <br />
            <div className="profilePosts">
                <h2>My Posts</h2>
                {
                    userPosts.map((post, index) => {
                        const { _id: ID, active, createdAt, description, location, price, title, updatedAt, willDeliver} = post;
                        const dayCreated = createdAt.slice(0,10);
                        const timeCreated = createdAt.slice(11,16);
                        const dayUpdated = updatedAt.slice(0,10);
                        const timeUpdated = updatedAt.slice(11,16);

                        if(active){
                            return (
                                <div key={ID} className="post">
                                    <div className="postHeading">
                                        <div className="title">{title}</div>
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
                                        <div className="interact">
                                            <Link to={`/edit/${ID}`}><button>Edit</button></Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })
                }
            </div>
            <div className="profileMessages">
                <h2>My Messages</h2>
                {
                    userMessages.map((message, index) => {
                        const { fromUser: { username }, post: {title}} = message;

                        return (
                            <div key={index} className="post">
                                <div className="message">
                                    <div className="postHeading">
                                        <div className="title">{username}</div>
                                    </div>
                                    <div className="description">{title}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>);
}
export default Profile;
