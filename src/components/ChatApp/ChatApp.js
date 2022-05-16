import './App.css';
import React, {useState, useEffect} from 'react';
import ChatList from '../ChatList/ChatList';
import Nav from '../Nav/Nav';
import Header from '../Header/Header';

// This is a copy of App showing what it would look like if it was just showing Chat functionality so that App doesn't have to be changed.
// This will be deleted when we assemble App.

function ChatApp() {
  const [users, setUsers] = useState([
    {username: 'Rory', id: 1, image: 'example.jpg'},
    {username: 'Lauralyn', id: 2, image: 'example2.jpg'},
    {username: 'Andrew', id: 3, image: 'example3.jpg'}
  ]);
  const [userID, setUserID] = useState(0);
  return (
    <div>
      <Header />
      <ChatList users={users}/>
      <Nav />
    </div>
  );
}

// export default ChatApp