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



