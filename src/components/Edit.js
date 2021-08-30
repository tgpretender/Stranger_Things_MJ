import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Edit = (props) => {
    const { baseURL, userToken } = props;
    const [ newDesc, setNewDesc ] = useState("")
    const { id } = useParams();

    const EditPost = (event) => {
        event.preventDefault()

        const response = fetch(`${baseURL}/posts/${postID}`, {
            method: "PATCH",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${userToken}`
            },
            body: JSON.stringify({
                description: message,
            })
        })
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.error(err));
    }

    return (
        <div className="edit">
            <h1>Edit your post</h1>
            <br />
            <form onSubmit={() => EditPost({ID, newDesc})}>
                <label>New Description: </label>
                <br /><br />
                <textarea is="message" 
                    type="text"
                    name="message"
                    rows="5"
                    value={newDesc}
                    onChange={(e) => setNewDesc(e.target.value)} />
                <div className="interact">
                    <button onClick={() => EditPost({ID, newDesc})}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Edit