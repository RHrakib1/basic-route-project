import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ShowUser = () => {
    const show = useLoaderData()
    const {address,phone } = show
    return (
        <div className='bg-slate-500'>
            <h2>Address:{address.city}</h2>
            <h4>Phone: {phone}</h4>
        </div>
    );
};

export default ShowUser;