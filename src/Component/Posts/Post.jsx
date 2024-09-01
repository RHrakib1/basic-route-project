import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({post}) => {
    const {id,title,body}=post
    const poststyle = {
        'border': '2px solid blue',
        'borderRadius': '20px',
        'padding':'20px'
    }
    return (
        <div style={poststyle}>
            <h3>title{title}</h3>
            <small>{body}</small>
            <Link to={`/post/${id}`}><button>More post</button></Link>
        </div>
    );
};

export default Post;