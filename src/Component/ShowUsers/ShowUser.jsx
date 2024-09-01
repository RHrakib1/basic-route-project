import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const ShowUser = () => {
    const show = useLoaderData()
    const { address, phone } = show
    const navigarte = useNavigate()
    const backHeandle = () => {
        navigarte(-1)

    }
    return (
        <div className='bg-slate-500'>
            <h2>Address:{address.city}</h2>
            <h4>Phone: {phone}</h4>
            <button onClick={backHeandle }>back</button>
        </div>
    );
};

export default ShowUser;