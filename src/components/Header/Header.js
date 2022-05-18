import React from "react";
import {Link} from 'react-router-dom'
import LoggedInUser from '../LoggedInUser/LoggedInUser';
import ProfileSettings from '../ProfileSettings/ProfileSettings';

const Header = () => {

    return (
        <header>
          <Link to='/settings'>
            <button>settings</button>
          </Link>
          <Link to='/'>
            <button>home</button>
          </Link>
          <Link to='/profile/1'>
            <LoggedInUser />
          </Link>
        </header>
    )
}

export default Header
