// src/components/BlogPost.jsx

import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
    const { id } = useParams();

    // You would typically fetch the post data using the id
    return (
        <div>
            <h1>Blog Post {id}</h1>
            <p>This is the content of the blog post with ID: {id}</p>
            {/* Add more content or fetch data based on the ID */}
        </div>
    );
};

export default BlogPost;
