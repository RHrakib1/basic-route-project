import React from 'react';
import { Link } from 'react-router-dom';

const User = ({user}) => {
    const {id,name,email}=user
    const poststyle = {
        'border': '2px solid blue',
        'borderRadius': '20px',
        'padding':'20px'
    }
    return (
        <div style={poststyle}>
            <h2>Name:{name}</h2>
            <h5>Email:{email}</h5>
            <Link to={`/user/${id}`}><button>show more</button></Link>

        </div>
    );
};

export default User;