import React from 'react';

const UserCard = ({username, id}) => {
    return (
        <div className='user-card' key={id}>
            <p>{username}</p>
        </div>
    )
}

export default UserCard;