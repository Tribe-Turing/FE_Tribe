import React from 'react';
import { Link } from 'react-router-dom';
import './UserCard.css'
import animals from '../../animals'

const UserCard = ({username, id, image, setMessageUser}) => {
    return (
        <Link to={`/user/${id}`}>
        <div className='user-card' key={id} onClick={() => setMessageUser(id)}>
            <img className="photo" src={animals[image] alt="Animal Profile Icon"}/>
            <div className='name-banner'>
              <p className='username'>{username}</p>
            </div>
        </div>
        </Link>
    )
}

export default UserCard;
