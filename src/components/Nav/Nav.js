import React from "react";
import {Link} from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    return (
        <nav>
          <Link to='/'>
            <button aria-label="Home Button" className="home-button"><i className='fa fa-house' aria-hidden="true"></i></button>
          </Link>
          <Link to="/chatlist">
            <button aria-label="Chat Button" className="chat-button"><i className='fa fa-comment' aria-hidden="true"></i></button>
          </Link>
          <Link to='/settings'>
            <button aria-label="Settings Button" className="settings-button"><i className='fa fa-gears' aria-hidden="true"></i></button>
          </Link>
        </nav>
    )
}

export default Nav;
