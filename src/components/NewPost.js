import { useState } from 'react';

const NewPost = (props) => {
    const { baseURL, userName, isAuthenticated} = props;
    const [ postTitle, setPostTitle ] = useState(" ");
    const [ postMessage, setPostMessage ] = useState(" ");

    //this should only appear if isAuthenticated = true
    //should definitely not work unless it is, too
    //figure this out AFTER the sendPost funciton is working successfully

    //variable testing, will be deleted once NewPost is working correctly
    if(isAuthenticated) {
        console.log("Can post? ", true);
    } else {
        console.log("Can post? ", false);
    }
    //end of variable testing

    function sendPost(title,message) {
        event.preventDefault();

        //variable testing, will be deleted once sendPost is working correctly
        console.log("Current user:", userName);
        console.log("Title:", title);
        console.log("Message: ", message);
        //end of variable testing

        function sendPost(title,message) {
            //look at Register to get an idea of how to go about this

            //use fetch to send the post out to to baseURL/posts, I think?
            //https://strangers-things.herokuapp.com/api/ is the documentation to check

            //use title,message, and username to fill in what's sent to the database
            //username is so it can be used to decide if a post can be deleted by the logged in user
            //also so it can be used to search for all posts by that user

        
        }

        //once we know this works, possibly display the new post in main after submission?
    }

    return (<div className="newPost">
        <h1>Make a New Post</h1>
            <form onSubmit={() => {sendPost(postTitle,postMessage)}}>
                <div>
                    <label>Title: </label><br />
                    <input id="title"
                    type="type"
                    name="title"
                    value={postTitle}
                    onChange={(e) => setPostTitle(e.target.value)} />
                </div>
                <div>
                    <label>Message: </label><br />
                    <textarea is="message" 
                    type="type"
                    name="message"
                    rows="5"
                    cols="23"
                    value={postMessage}
                    onChange={(e) => setPostMessage(e.target.value)} />
                </div>
                <button onClick={() => sendPost(postTitle,postMessage)}>Submit</button>
            </form>
        </div>)
}

export default NewPost;