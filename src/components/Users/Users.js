import React, { useState, useEffect } from 'react';
import UserDetails from '../UserDetails/UserDetails';


const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect( () => {
        const url =`https://jsonplaceholder.typicode.com/users`
        fetch(url)
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])
    return (
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {
                users.map(user => <UserDetails user={user} key={user.id}></UserDetails>)
            }
        </div>
    );
};

export default Users;