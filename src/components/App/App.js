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

function App() {
  const [users, setUsers] = useState([
    {
      "id": 1,
      "first_name": "Susan",
      "last_name": "Smith",
      "pronouns": "she/her",
      "image": "otter",
      "city": "Denver, CO",
      "interests": ["animals", "nature"],
      "bio": "I am lonely and have too many cats."
  },
  {
      "id": 2,
      "first_name": "Shelley",
      "last_name": "Smithe",
      "pronouns": "she/her",
      "image": "otter",
      "city": "Denver, CO",
      "interests": ["animals", "knitting"],
      "bio": "I am lonely and need more cats."
  },
  {
      "id": 3,
      "first_name": "Millie",
      "last name": "Millinson",
      "pronouns": "she/her",
      "image": "otter",
      "city": "Denver, CO",
      "interests": ["nightlife", "video games"],
      "bio": "I love playing games and having fun!"
  },
    {
        "id": 4,
        "first_name": "Marti",
        "last name": "Duly",
        "pronoun": "he/him",
        "interests": [
            "technology",
            "nature"
        ],
        "city": "Fort Collins, CO",
        "bio": "Mandatory value-added installation"
    },
    {
        "id": 5,
        "first_name": "Sunny",
        "last name": "Frend",
        "pronoun": "he/him",
        "interests": [
            "music",
            "technology"
        ],
        "city": "Fort Collins, CO",
        "bio": "Mandatory 24/7 moderator"
    },
    {
        "id": 6,
        "first_name": "Teodorico",
        "last name": "Clemerson",
        "pronoun": "he/him",
        "interests": [
            "music",
            "nature"
        ],
        "city": "Fort Collins, CO",
        "bio": "Synergized context-sensitive artificial intelligence"
    },
    {
        "id": 7,
        "first_name": "Rhiamon",
        "last name": "Armand",
        "pronoun": "he/him",
        "interests": [
            "nature",
            "cooking"
        ],
        "city": "Fort Collins, CO",
        "bio": "Grass-roots responsive capacity"
    },
    {
        "id": 8,
        "first_name": "Marijo",
        "last name": "Sate",
        "pronoun": "he/him",
        "interests": [
            "music",
            "technology"
        ],
        "city": "Fort Collins, CO",
        "bio": "Robust executive concept"
    },
    {
        "id": 9,
        "first_name": "Linell",
        "last name": "Tracy",
        "pronoun": "she/her",
        "interests": [
            "cooking",
            "animals"
        ],
        "city": "Denver, CO",
        "bio": "Operative leading edge website"
    },
    {
        "id": 10,
        "first_name": "Coleen",
        "last name": "Nealon",
        "pronoun": "she/her",
        "interests": [
            "animals",
            "nature"
        ],
        "city": "Denver, CO",
        "bio": "Team-oriented radical customer loyalty"
    },
    {
        "id": 11,
        "first_name": "Milissent",
        "last name": "Clutterbuck",
        "pronoun": "she/her",
        "interests": [
            "nature"
        ],
        "city": "Denver, CO",
        "bio": "Customizable executive paradigm"
    },
    {
        "id": 12,
        "first_name": "Solomon",
        "last name": "Daen",
        "pronoun": "he/him",
        "interests": [
            "fishing",
            "animals"
        ],
        "city": "Denver, CO",
        "bio": "Horizontal fault-tolerant parallelism"
    },
    {
        "id": 13,
        "first_name": "Sarita",
        "last name": "Borsay",
        "pronoun": "she/her",
        "interests": [
            "technology"
        ],
        "city": "Denver, CO",
        "bio": "User-centric dynamic workforce"
    }
]);
  const [userID, setUserID] = useState(0);
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


    </div>
  );
}

export default App
