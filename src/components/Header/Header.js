import React from "react";
import {Link} from 'react-router-dom'
import LoggedInUser from '../LoggedInUser/LoggedInUser';
import ProfileSettings from '../ProfileSettings/ProfileSettings';
import './Header.css'

const Header = ({ loggedInUser }) => {

    return (
        <header>
          <Link to={`/profile/${localStorage.getItem('loggedInUserID')}`}>
            <img className='profile-icon' src={loggedInUser.image}/>
          </Link>
          <div className='head'>
            <h1>Tribe</h1>
          </div>
        </header>
    )
}

export default Header
