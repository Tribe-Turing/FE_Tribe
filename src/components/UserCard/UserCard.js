import React from 'react';

const UserCard = ({image, username, id}) => {
    return (
        <div className='user-card' key={id}>
            <img src={image}/>
            <p>{username}</p>
        </div>
    )
}

export default UserCard;