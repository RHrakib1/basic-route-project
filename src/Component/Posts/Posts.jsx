import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from './Post';
import '../Style/Posts/Posts.css'

const Posts = () => {
    const posts = useLoaderData()

    return (
        <div>
            <h2>Posted: {posts.length}</h2>
            <div className='posts'>
                {
                    posts.map((copyposts, idx) => <Post key={idx} post={copyposts}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;