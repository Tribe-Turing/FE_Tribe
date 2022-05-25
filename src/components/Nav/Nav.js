import React from "react";
import {Link} from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    return (
        <nav>
          <Link to='/'>
            <button className="home-button"><i className='fa fa-house' aria-hidden="true"></i></button>
          </Link>
          <Link to="/chatlist">
            <button className="chat-button"><i className='fa fa-comment' aria-hidden="true"></i></button>
          </Link>
          <Link to='/settings'>
            <button className="settings-button"><i className='fa fa-gears' aria-hidden="true"></i></button>
          </Link>
        </nav>
    )
}

export default Nav;
