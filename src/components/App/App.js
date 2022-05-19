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
import apiCalls from '../../apiCalls';

function App() {
  const [users, setUsers] = useState([]);
  // const [userID, setUserID] = useState(0);

  const getUsers = async () => {
      const response = await apiCalls.fetchUsers();
      const data = await response;
      setUsers(data);
      console.log(data);
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
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


    </div>
  );
}

export default App
