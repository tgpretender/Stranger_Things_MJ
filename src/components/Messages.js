import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Messages = (props) => {
    const { baseURL, userToken} = props;
    const [ postMessage, setPostMessage ] = useState("");
    const { id } = useParams();

    const notify = () => toast("Your message was submitted!");


         const sendMessage = (event) => {
           event.preventDefault();

            fetch(`${baseURL}/posts/${id}/messages`, {
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
                  setPostMessage('');
                  notify();
                })
                .catch(console.error);
            }

            return (<div className="newMessage">
              <ToastContainer />
            <h1>Send A Message</h1>
                <form onSubmit={sendMessage}>
                    <div>
                        <label>Message: </label><br />
                        <input id="message"
                        type="text"
                        name="message"
                        value={postMessage}
                        onChange={(e) => setPostMessage(e.target.value)} />
                    </div>
                    <div className="interact">
                      <button type="submit" disabled={postMessage === "" ? true : false}>Submit</button>
                    </div>
                </form>
            </div>
            )
          }
          
          export default Messages;