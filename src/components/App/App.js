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
  const [loggedInUser, setLoggedInUser] = useState({});
  const [messages, setMessages] = useState([]);
  const [loggedInUserProfPic, setLoggedInUserProfPic] = useState("");
  const [userID, setUserID] = useState(1);
  const [messageUser, setMessageUser] = useState('');

  const getUsers = async () => {
    const response = await apiCalls.fetchUsers();
    const data = await response.filter(profile => profile.id != userID);
    setUsers(data);
    const id = localStorage.getItem('loggedInUserID')
    if (id) {
      getOneUser(id);
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
      <Header loggedInUser={loggedInUser}/>

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
              <UserProfile
                id={id}
                loggedInUser={loggedInUser}
                setMessageUser={setMessageUser}
              />
              <Nav />
            </>
          )
        }
      }/>

      <Route exact path='/'>
        <Dashboard
          users={users}
          setMessageUser={setMessageUser}
        />
        <Nav />
      </Route>

      <Route exact path='/chatlist'>

        <ChatList
          users={users}
          loggedInUser={loggedInUser}
          messageUser={messageUser}
        />
        <Nav />
      </Route>

      <Route exact path='/messaging'>
        <ChatWindow users={users} />
        <Nav />
      </Route>

      <Route exact path='/settings'>
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

      <Route exact path='/profile/:id' render={({match}) => {
        return (
          <>
            <UserProfile
              id={match.params.id}
              loggedInUser={loggedInUser}
            />
            <Nav />
          </>
        )
      }}
      />

      <Route exact path="/conversations/:id">
        <>
          <Chat
            users={users}
            messages={messages}
            setMessages={setMessages}
            loggedInUser={loggedInUser}
            loggedInUserProfPic={loggedInUserProfPic}
            messageUser={messageUser}
          />
          <Nav />
        </>
      </Route>

      <Route exact path={`/profile/${localStorage.getItem('loggedInUserID')}`}>
        <LoggedInUser />
      </Route>

    </div>
  )
}

export default App
