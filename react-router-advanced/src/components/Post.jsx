   // src/components/Post.jsx

   import React from 'react';
   import { useParams } from 'react-router-dom';

   const Post = () => {
       const { postId } = useParams();
       return <div>Displaying content for post ID: {postId}</div>;
   };

   export default Post;
   
