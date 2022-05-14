import './App.css';
import React, {useState, useEffect} from 'react';
import Dashboard from '../Dashboard/Dashboard';

function App() {
  const [users, setUSers] = useState([]);
  const [userID, setUserID] = useState(0);
  return (
    <div>
      <Dashboard users={users}/>
    </div>
  );
}

export default App
