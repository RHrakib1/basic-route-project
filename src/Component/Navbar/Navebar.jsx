import React from 'react';
import { Link } from 'react-router-dom';

const Navebar = () => {
    return (
        <div >
            <Link className='mr-10' to='/'>Home</Link>
            <Link className='mr-10' to='/about'>About</Link>
            <Link className='mr-10' to='/contact'>Contact</Link>
            <Link className='mr-10' to='/posts'>Post</Link>
            <Link className='mr-10' to='/users'>User</Link>
            
            
        </div>
    );
};

export default Navebar;