import './App.css';
import React, {useState, useEffect} from 'react';
import ChatList from '../ChatList/ChatList';
import Nav from '../Nav/Nav';
import Header from '../Header/Header';

// This is a copy of App showing it would look like without changing App.

function Chat() {
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

export default Chat