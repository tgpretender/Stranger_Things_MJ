import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Edit = (props) => {
    const { baseURL, userToken } = props;
    const [ newDesc, setNewDesc ] = useState("")
    const { id } = useParams();

    const notify = () => toast("Your edit was submitted!");

    const EditPost = (event) => {
        event.preventDefault();

        fetch(`${baseURL}/posts/${id}`, {
            method: "PATCH",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${userToken}`
            },
            body: JSON.stringify({
                post: {
                    description: newDesc
                }
            })
        })
        .then(res => res.json())
        .then(result => {
            if(result.success){
            setNewDesc('')
            notify();
            }else {
                alert("You do not have permission to edit this post!")
            }
        })
        .catch(err => console.error(err));
    }

    return (
        <div className="edit">
            <ToastContainer />
            <h1>Edit your post</h1>
                <br />
                <form onSubmit={EditPost}>
                    <label>New Description: </label>
                    <br /><br />
                    <textarea is="message" 
                        type="text"
                        name="message"
                        rows="5"
                        value={newDesc}
                        onChange={(e) => setNewDesc(e.target.value)} />
                    <div className="interact">
                    <button type="submit" disabled={EditPost === "" ? true : false}>Submit</button>

                    </div>
                </form>
        </div>
    )
}

export default Edit