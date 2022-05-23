import React from 'react';
import { Link } from 'react-router-dom';
import './UserCard.css'

const UserCard = ({username, id, image, setMessageUser}) => {
    return (
        <Link to={`/user/${id}`}>
        <div className='user-card' key={id} onClick={() => setMessageUser(id)}>
            <img className="photo" src={image}/>
            <div className='name-banner'>
              <p className='username'>{username}</p>
            </div>
        </div>
        </Link>
    )
}

export default UserCard;
