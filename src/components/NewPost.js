import { useState } from 'react';

const NewPost = (props) => {
    const { baseURL, userName, isAuthenticated} = props;
    const [ title, setTitle ] = useState(" ");
    const [ message, setMessage ] = useState(" ");

    function sendPost(postTitle,postMessage) {
        event.preventDefault();

        //assign property to the post for userName
        //that way it can be used to decide if a post can be deleted
        //use title and message to fill it in when sending to the database

        console.log(userName);
        console.log("Title:", postTitle);
        console.log("Message: ", postMessage);

        if(isAuthenticated) {
            console.log("can post");
        } else {
            console.log("cannot post")
        }
    }

    return (<div className="newPost">
        <h1>Make a New Post</h1>
            <form onSubmit={() => {sendPost(title,message)}}>
                <div>
                    <label>Title: </label><br />
                    <input id="title"
                    type="type"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <label>Message: </label><br />
                    <textarea is="message" 
                    type="type"
                    name="message"
                    rows="5"
                    cols="23"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)} />
                </div>
                <button onClick={() => sendPost(title,message)}>Submit</button>
            </form>
        </div>)
}

export default NewPost;