import './App.css';
import React, {useState, useEffect} from 'react';
import { Route, Redirect } from 'react-router-dom'
import Dashboard from '../Dashboard/Dashboard';
import Nav from '../Nav/Nav';
import UserProfile from '../UserProfile/UserProfile';
import Header from '../Header/Header';
import OnlineProfiles from '../OnlineProfiles/OnlineProfiles';
import ChatList from '../ChatList/ChatList';
import ChatWindow from '../ChatWindow/ChatWindow';
import Chat from '../Chat/Chat';

import ProfileSettings from '../ProfileSettings/ProfileSettings';
import LoggedInUser from '../LoggedInUser/LoggedInUser';
import apiCalls from '../../apiCalls';
function App() {
  const [users, setUsers] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState('');
  const [messages, setMessages] = useState([]);
  const [loggedInUserProfPic, setLoggedInUserProfPic] = useState("");
  const [loggedInUserUnreadMessages, setLoggedInUserUnreadMessages] = useState([]);
  const [userID, setUserID] = useState(1);

  const getUsers = async () => {
    const response = await apiCalls.fetchUsers();
    const data = await response.filter(profile => profile.id != userID);
    setUsers(data);
    const id = localStorage.getItem('loggedInUserID')
    if (localStorage.getItem('loggedInUserID')) {
      getOneUser(localStorage.getItem('loggedInUserID'));
    }
  }

  const getOneUser = async (id) => {
    const response = await apiCalls.fetchOneUser(id);
    const data = await response;
    setLoggedInUser(data);
    setLoggedInUserProfPic(data.image);
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <Route exact path='/login/:id' render={({match}) => {
        localStorage.setItem('loggedInUserID', match.params.id)
        return (
          <Redirect to='/'/>
        )
      }} />

      <Route exact path='/signout' render={() => {
        localStorage.removeItem('loggedInUserID');
        return (
          <Redirect to='/'/>
        )
      }} />

      <Route exact path='/user/:id' render={( { match } ) => {
        let id = parseInt(match.params.id)
        return (
            <>
              <Header />
              <UserProfile id={id}/>
              <Nav />
            </>
          )
        }
      }/>

      <Route exact path='/'>
        <Header />
        <Dashboard users={users} />
        <Nav />
      </Route>

      <Route exact path='/chatlist'>
        <Header />
        <OnlineProfiles />
        <ChatList users={users} />
        <Nav />
      </Route>

      <Route exact path='/messaging'>
        <Header />
        <ChatWindow users={users} />
        <Nav />
      </Route>

      <Route exact path='/settings'>
        <Header />
        <ProfileSettings />
        <Nav />
      </Route>

      {/* <Route exact path='/profile/:id' render={( { match } ) => {
        let id = parseInt(match.params.id)
        return (
            <>
              <Header />
              <UserProfile id={id}/>
              <Nav />
            </>
          )
        }
      }/> */}

      <Route exact path='/profile/1'>
        <Header />
        <UserProfile id={1}/>
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
  )
}

export default App
