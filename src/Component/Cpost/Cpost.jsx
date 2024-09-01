import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Cpost = () => {
    const postcp=useLoaderData()
    const {title,body} = postcp
    return (
        <div>
            <h4>title:{title}</h4>
            <h6>{body}</h6>
        </div>
    );
};

export default Cpost;