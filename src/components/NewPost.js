import { useState } from 'react';

const NewPost = (props) => {
    const { baseURL, isAuthenticated, userToken} = props;
    const [ postTitle, setPostTitle ] = useState(" ");
    const [ postMessage, setPostMessage ] = useState(" ");
    const [ postPrice, setPostPrice] = useState("");
    const [postDelivery, setPostDelivery] = useState(false);
    //this should only appear if isAuthenticated = true
    //should definitely not work unless it is, too
    //figure this out AFTER the sendPost functioncre is working successfully

    //variable testing, will be deleted once sendPost is working correctly
    // if(isAuthenticated) {
    //     console.log("Can post? ", true);
    // } else {
    //     console.log("Can post? ", false);
    // }
    //end of variable testing



        //variable testing, will be deleted once sendPost is working correctly
        //console.log("Current user:", userName);
        // console.log("Title:", postTitle);
        // console.log("Message: ", postMessage);
         //console.log(userToken);
        //end of variable testing
        
         const sendPost = async() => {
             event.preventDefault();

             console.log('sendingpost', postTitle, postMessage, postPrice);
            const response = await fetch(`${baseURL}/posts`, {
                method: "POST",
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${userToken}`
                },
                body: JSON.stringify({
             post: {
                title: postTitle,
                description: postMessage,
                price: postPrice,
                willDeliver: false,
              }
                })
              });

            

            //use fetch to send the post out to baseURL/posts, I think?
            //https://strangers-things.herokuapp.com/api/ is the documentation to check

            //use title, message, and username to fill in what's sent to the database
            //check GetData response to see what properties the fetched posts have, I may be wrong that title, message, and username are included

            //userName is attached so it can be used to decide if a post can be deleted by the logged in user
            //also so it can be used to search for all posts by that user
            //might need to use userToken instead, not sure what the returned GetData post data looks like

            //once this beginning logic works, can add fields to the return for other properties for the posts
            //they will need their own getter/setter for each field
            //we will need to decide which fields are required and add that property to the input
            const post = await response.json();
            console.log("newpost", post);
        
        }

        //once we know this works, possibly display the new post in main after submission?
    

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
                    <label>Message: </label><br />
                    <textarea is="message" 
                    type="text"
                    name="message"
                    rows="5"
                    value={postMessage}
                    onChange={(e) => setPostMessage(e.target.value)} />
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
                    <label>Delivery: </label><br />
                    <select id=""
                    type="text"
                    name="Delivery"
                    value={postDelivery}
                    onChange={(e) => setPostDelivery(e.target.value)} >
                        <option value= {true}>
                            "yes"
                        </option>
                        <option value= {false}>
                            "no"
                        </option>
                        </select>
                </div> 
                <button type= "submit">Submit</button>
            </form>
        </div>)
        
}

export default NewPost;