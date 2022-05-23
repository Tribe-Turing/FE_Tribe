import React from "react";
import {Link} from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
          <Link to='/'>
            <button>home</button>
          </Link>
          <Link to="/chatlist">
            <button className="chat-button">Chat</button>
          </Link>
          <Link to='/settings'>
            <button>settings</button>
          </Link>
        </nav>
    )
}

export default Nav;
