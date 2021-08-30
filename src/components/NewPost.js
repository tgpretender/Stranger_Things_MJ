import { useState } from 'react';

const NewPost = (props) => {
    const { baseURL, userToken} = props;
    const [ postTitle, setPostTitle ] = useState(" ");
    const [ postDescription, setPostDescription ] = useState(" ");
    const [ postPrice, setPostPrice ] = useState("");
    const [ postLocation, setPostLocation ] = useState("");
    const [ postDelivery, setPostDelivery ] = useState(false);
        
    const sendPost = async() => {
        //event.preventDefault();

        const response = await fetch(`${baseURL}/posts`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${userToken}`
            },
            body: JSON.stringify({
                post: {
                    title: postTitle,
                    description: postDescription,
                    price: postPrice,
                    location: postLocation, 
                    willDeliver: postDelivery,
                }
            })
        })
        .then((response) => {
            location.reload();
        })

        const post = await response.json();
    }

    return (<div className="newPost">
        <h1>Make a New Post</h1>
            <form onSubmit={sendPost}>
                <div>
                    <label>Title: </label><br />
                    <input id="title"
                    type="text"
                    name="title"
                    value={postTitle}
                    onChange={(e) => setPostTitle(e.target.value)} />
                </div>
                <div>
                    <label>Description: </label><br />
                    <textarea is="description" 
                    type="text"
                    name="description"
                    rows="5"
                    value={postDescription}
                    onChange={(e) => setPostDescription(e.target.value)} />
                </div>
                <div>
                    <label>Price: </label><br />
                    <input id="price"
                    type="text"
                    name="price"
                    value={postPrice}
                    onChange={(e) => setPostPrice(e.target.value)} />
                </div>
                <div>
                    <label>Location: </label><br />
                    <input id="location"
                    type="text"
                    name="location"
                    value={postLocation}
                    onChange={(e) => setPostLocation(e.target.value)} />
                </div>
                <div>
                    <label>Delivery: </label><br />
                    <select id=""
                    type="text"
                    name="Delivery"
                    value={postDelivery}
                    onChange={(e) => setPostDelivery(e.target.value)} >
                        <option value= {true}>
                            Yes
                        </option>
                        <option value= {false}>
                            No
                        </option>
                        </select>
                </div>
                <br />
                <button type= "submit">Submit</button>
            </form>
        </div>)
        
}

export default NewPost;