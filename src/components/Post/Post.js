import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PostDetails from '../PostDetails/PostDetails';


const Post = () => {
    const { userId } = useParams()
    const [posts, setPosts] = useState([])
    useEffect( () => {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [])
    return (
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {
                posts.map(post => <PostDetails post={post} key={post.id}></PostDetails>)
            }
        </div>
    );
};

export default Post;