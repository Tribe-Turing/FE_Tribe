import React from "react";
import {Link} from 'react-router-dom'
import LoggedInUser from '../LoggedInUser/LoggedInUser';
import ProfileSettings from '../ProfileSettings/ProfileSettings';

const Header = () => {

    return (
        <header>
          <Link to={`/profile/${localStorage.getItem('loggedInUserID')}`}>
            <LoggedInUser />
          </Link>
          <div className='head'>
            <h1>Tribe</h1>
          </div>
        </header>
    )
}

export default Header
