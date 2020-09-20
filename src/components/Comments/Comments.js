import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentsDetails from '../CommentsDetails/CommentsDetails';


const Comments= () => {
    const{postId} = useParams();
    const[comments,setComments]=useState([]);
    useEffect(()=>{
        const url=`https://jsonplaceholder.typicode.com/comments?postId=${postId}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setComments(data));
    }, [])
    return (
        <div>
           
                {
                    comments.map(comment => <CommentsDetails comment={comment} key={comment.id}></CommentsDetails>)
                }   
            
        </div>
    );
};

export default Comments;