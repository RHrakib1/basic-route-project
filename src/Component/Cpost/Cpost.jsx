import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Cpost = () => {
    const postcp = useLoaderData()
    const { title, body } = postcp
    const navigate = useNavigate()
    const backHendle=()=>{
        navigate(-1)
    }
    return (
        <div>
            <h4>title:{title}</h4>
            <h6>{body}</h6>
            <button onClick={backHendle}>back</button>
        </div>
    );
};

export default Cpost;