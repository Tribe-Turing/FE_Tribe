import './App.css';
import React, {useState, useEffect} from 'react';
import Dashboard from '../Dashboard/Dashboard';
import Nav from '../Nav/Nav';

function App() {
  const [users, setUsers] = useState([
    {username: 'Rory', id: 1, image: 'example.jpg'},
    {username: 'Lauralyn', id: 2, image: 'example2.jpg'},
    {username: 'Andrew', id: 3, image: 'example3.jpg'}
  ]);
  const [userID, setUserID] = useState(0);
  return (
    <div>
      <Dashboard users={users}/>
      <Nav />
    </div>
  );
}

export default App
