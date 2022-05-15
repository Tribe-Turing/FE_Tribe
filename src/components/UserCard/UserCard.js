import React from 'react';
import { Link } from 'react-router-dom';
import './UserCard.css'

const UserCard = ({username, id}) => {
    return (
        <Link to='/user'>
        <div className='user-card' key={id}>
            <p>{username}</p>
        </div>
        </Link>
    )
}

export default UserCard;