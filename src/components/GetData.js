//This is for your initial fetch code once you perfect it on index.js
//Remember to export it from here and then import it on both index.js and /components/index.js 
import React, {useState} from 'react'

const GetData = (props) => {
    const {baseURL} = props;
    //const [posts, setPosts] = useState('');

    
    fetch(`${baseURL}/posts`, {
        method: "GET",
        headers: {
            'Content-Type': "application/json"
        }
    })
    .then(res => res.json())
    .then(res => console.log(res.data.posts))
    
    .catch(error => console.error(error));

   
    
    return <div>GetData</div>
}
// const posts = res.data.posts;
//        posts.forEach(post => {
//            console.log(post);
//            return post

// useEffect(()=>{
//     const  = <a GetData ></a>
 
//     setUsername (posts)
// }
// ,[])


export default GetData;