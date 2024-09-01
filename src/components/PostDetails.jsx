import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
function PostDetails() {
    const { id } = useParams();
    const [post, setPost] = useState({});
  
    useEffect(() => {
      axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => {
          setPost(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }, [id]);
  
    return (
      <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    );
  }

export default PostDetails;