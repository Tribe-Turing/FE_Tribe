import React from 'react';
import './UserCard.css'

const UserCard = ({username, id}) => {
    return (
        <div className='user-card' key={id}>
            <p>{username}</p>
        </div>
    )
}

export default UserCard;