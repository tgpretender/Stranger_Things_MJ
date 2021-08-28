const deletePost = () => {
    fetch(`${baseURL}/POST_ID`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${userToken}`
        }
      }).then(response => response.json())
        .then(result => {
          console.log(result);
        })
        .catch(console.error);
}



import React from 'react';

const Profile = () => {
    //const { userName } = props;
    <h1>Profile from component</h1>
}

export default Profile;
