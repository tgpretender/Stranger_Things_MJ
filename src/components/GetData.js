//This is for your initial fetch code once you perfect it on index.js
//Remember to export it from here and then import it on both index.js and /components/index.js 
import React, {useState, useEffect} from 'react'

const GetData = (props) => {
    const {baseURL} = props;


    async function getPosts() {
        try {
            const response = await fetch(`${baseURL}/posts`, {
                method: "GET",
                headers: {
                    'Content-Type': "application/json"
                }
            })
            const data = await response.json();
            return data;
        }
        catch (error) {
            console.error(error);
        }
    }
    const example = getPosts();


    // useEffect(()=>{
//     const  = <a GetData ></a>
 
//     setUsername (posts)
// }
// ,[])




    return null
}
// const posts = res.data.posts;
//        posts.forEach(post => {
//            console.log(post);
//            return post



export default GetData;