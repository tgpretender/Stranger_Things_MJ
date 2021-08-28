import React from 'react'

const GetData = (props) => {
    const {baseURL} = props;

    const response = fetch(`${baseURL}/posts`, {
        method: "GET",
        headers: {
            'Content-Type': "application/json"
        }
    })
    .then(res => res.json())
    .then(res => res)
    .catch(err => console.error(err))

    console.log(response);
    





    // gatheredPosts.forEach(single => {
    //     console.log(single);
        // const title = post.title
        // const author = post.author.username;
        // const description = post.description;
        // const created = post.createdAt;
        // const updated = post.updatedAt;
        // const location = post.location;
        // const price = post.price;
        // const deliver = post.willDeliver;
        
        // const postTemplate = (
        // <div className="post">
        //     <div className="postHeading">
        //         <div className="title"><h1>{title}</h1></div>
        //         <div className="author">by {author}</div>
        //     </div>
        //     <div className="description">{description}</div>
        // </div>)
    // })

    return null;
}


export default GetData;