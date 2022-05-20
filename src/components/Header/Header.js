import React from "react";
import {Link} from 'react-router-dom'
import LoggedInUser from '../LoggedInUser/LoggedInUser';
import ProfileSettings from '../ProfileSettings/ProfileSettings';

const Header = () => {

    return (
        <>
          <Link to='/settings'>
            <button>settings</button>
          </Link>
          <Link to='/'>
            <button>home</button>
          </Link>
          <Link to='/profile'>
            <LoggedInUser />
          </Link>
        </>
    )
}

export default Header
