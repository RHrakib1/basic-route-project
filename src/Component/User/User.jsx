import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const User = ({ user }) => {
    const { id, name, email } = user
    const poststyle = {
        'border': '2px solid blue',
        'borderRadius': '20px',
        'padding': '20px'
    }
    const navigate = useNavigate()
    const showUsers = () => {
        navigate(`/user/${id}`)


    }
    return (
        <div style={poststyle}>
            <h2>Name:{name}</h2>
            <h5>Email:{email}</h5>
            <Link to={`/user/${id}`}><button>show more another</button></Link>
            <button onClick={showUsers}>more details</button>

        </div>
    );
};

export default User;