import './App.css';
import React, {useState, useEffect} from 'react';
import Dashboard from '../Dashboard/Dashboard';

function App() {
  const [users, setUSers] = setState([]);
  const [userID, setUserID] = setState(0);
  return (
    <div>
      <Dashboard />
    </div>
  );
}

export default App
