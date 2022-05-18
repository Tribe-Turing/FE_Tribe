import React from "react";
import {Link} from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
          <Link to="/">
            <button className="friends-button">Friends</button>
          </Link>
          <Link to="/chatlist">
            <button className="chat-button">Chat</button>
          </Link>
          <Link to="/settings">
            <button className="settings-nav-button">Other</button>
          </Link>
        </nav>
    )
}

export default Nav;
