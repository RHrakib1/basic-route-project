import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({ post }) => {
    const { id, title, body } = post
    const poststyle = {
        'border': '2px solid blue',
        'borderRadius': '20px',
        'padding': '20px'
    }
    const navigate = useNavigate()
    const hendlepost=()=>{
        navigate(`/post/${id}`)
    }
    return (
        <div style={poststyle}>
            <h3>title{title}</h3>
            <small>{body}</small>
            <Link to={`/post/${id}`}><button>More post another</button></Link>
            <button onClick={hendlepost}>more larn post</button>
        </div>
    );
};

export default Post;