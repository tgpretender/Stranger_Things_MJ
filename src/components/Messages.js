// For any post, you should add a form to send a message to the post author,
// only if there is a logged in user and the logged in user is not the one who made it.
// The message form really only needs a text input, and a button to create the message.
// Again, like the delete button, the submit handler will need a way to know how to form the correct URL so that the API responds,
// so make sure you're recovering it from the post element, if you're attaching it as data to begin with.
import React from 'react'

const Message = (props) => {
    const { baseURL, userName, isAuthenticated, userToken} = props;
    const [ postMessage, setPostMessage ] = useState(" ");
 


         const sendMessage = () => {
            fetch(`${baseURL}/posts/POST_ID/messages`, {
                method: "POST",
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${userToken}`
                },
                body: JSON.stringify({
                  message: {
                    content: postMessage
                  }
                })
              }).then(response => response.json())
                .then(result => {
                  console.log(result);
                })
                .catch(console.error);
            }

            return (<div className="newMessage">
            <h1>Send A Message</h1>
                <form onSubmit={sendNewMessage}>
                    <div>
                        <label>Message: </label><br />
                        <input id="message"
                        type="text"
                        name="message"
                        value={postMessage}
                        onChange={(e) => setPostMessage(e.target.value)} />
                    </div>
                    <button type= "submit">Submit</button>
                </form>
            </div>
            )
          }
          sendMessage()
          export default Message;