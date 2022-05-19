import React from 'react';
import { Link } from 'react-router-dom';
import './UserCard.css'

const UserCard = ({username, id, image}) => {
    return (
        <Link to={`/user/${id}`}>
        <div className='user-card' key={id}>
            {/* <img src={image}/> */}
            <p>{username}</p>
        </div>
        </Link>
    )
}

export default UserCard;