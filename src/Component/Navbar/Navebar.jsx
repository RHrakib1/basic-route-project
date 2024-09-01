import React from 'react';
import { Link } from 'react-router-dom';

const Navebar = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/posts'>Post</Link>
            <Link to='/users'>User</Link>
            
            
        </div>
    );
};

export default Navebar;