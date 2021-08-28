import React from 'react'

const GetData = (props) => {
    const {initialPosts} = props;

    console.log(initialPosts.active);

    const postTemplate = (
        <div className="post">
            <div className="postHeading">
                <div className="title"><h1>title</h1></div>
                <div className="author">by author</div>
            </div>
            <div className="description">description</div>
        </div>)

    return null;
}
        // const title = post.title
        // const author = post.author.username;
        // const description = post.description;
        // const created = post.createdAt;
        // const updated = post.updatedAt;
        // const location = post.location;
        // const price = post.price;
        // const deliver = post.willDeliver;
        
export default GetData;