import React from "react";
import {Link} from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
          <Link to="/">
            <button>Friends</button>
          </Link>
          <Link to="/chatlist">
            <button>Chat</button>
          </Link>
          <Link to="/settings">
            <button>Other</button>
          </Link>
        </nav>
    )
}

export default Nav;
