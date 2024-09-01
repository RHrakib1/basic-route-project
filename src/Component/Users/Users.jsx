import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from '../User/User';
import '../Style/Posts/Posts.css'

const Users = () => {
    const users=useLoaderData()

    return (
        <div>
            <h2> users: {users.length}</h2>
            <div className='posts'>
                {
                    users.map((copyusers,idx)=><User key={idx} user={copyusers}></User>)
                }
            </div>
            
        </div>
    );
};

export default Users;