import React from 'react'

const GetData = (props) => {
    const {initialPosts} = props;

    console.log(initialPosts);

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
    

export default GetData