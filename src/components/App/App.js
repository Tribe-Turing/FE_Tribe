import './App.css';
import React, {useState, useEffect} from 'react';
import { Route } from 'react-router-dom'
import Dashboard from '../Dashboard/Dashboard';
import Nav from '../Nav/Nav';
import UserProfile from '../UserProfile/UserProfile';
import Header from '../Header/Header';
import OnlineProfiles from '../OnlineProfiles/OnlineProfiles';
import ChatList from '../ChatList/ChatList';
import ChatWindow from '../ChatWindow/ChatWindow';
import ProfileSettings from '../ProfileSettings/ProfileSettings';
import LoggedInUser from '../LoggedInUser/LoggedInUser';
import Chat from '../Chat/Chat';

function App() {
  const [messages, setMessages] = useState([]);
  const [loggedInUserProfPic, setLoggedInUserProfPic] = useState("")
  const [loggedInUserUnreadMessages, setLoggedInUserUnreadMessages] = useState([])
  const [users, setUsers] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState('');


  useEffect(() => {
    fetch(`http://localhost:4000/api/v1/users/2`, {
      method: "GET"
    })
    .then(res => res.json())
    .then(data => {
      // console.log(data, "<<<data")
      // setMessages(data.conversations[0].messages);
      setLoggedInUser(data);
      setLoggedInUserProfPic(data.image);
    })
    fetch(`http://localhost:4000/api/v1/users`, {
      method: "GET"
    })
    .then(res => res.json())
    .then(data => {
      setUsers(data);
    })
  }, []);

  // const [userID, setUserID] = useState(1);
  return (
    <div>
      <Route exact path='/user'>
        <Header />
        <UserProfile />
        <Nav />
      </Route>

      <Route exact path='/'>
        <Header />
        <Dashboard users={users}/>
        <Nav />
      </Route>

      <Route exact path='/chatlist'>
        <Header />
        <OnlineProfiles />
        <ChatList users={users}/>
        <Nav />
      </Route>

      <Route exact path='/messaging'>
        <Header />
        <ChatWindow users={users}/>
        <Nav />
      </Route>

      <Route exact path='/settings'>
        <Header />
        <ProfileSettings />
        <Nav />
      </Route>

      <Route exact path='/profile'>
        <Header />
        <Nav />
      </Route>

      <Route exact path="/conversations/:id">
        <Chat
          messages={messages}
          setMessages={setMessages}
          loggedInUser={loggedInUser}
          loggedInUserProfPic={loggedInUserProfPic}
          loggedInUserUnreadMessages={loggedInUserUnreadMessages}
          setLoggedInUserUnreadMessages={setLoggedInUserUnreadMessages}
        />
      </Route>
    </div>

  );
}

export default App
