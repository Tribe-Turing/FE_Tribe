import './App.css';
import React, {useState, useEffect} from 'react';
import Messages from '../Messages/Messages';
import Nav from '../Nav/Nav';
import Header from '../Header/Header';

// This is a copy of App showing what it would look like if it was just showing Chat functionality so that App doesn't have to be changed.

function Chat() {
  const [draft, setDraft] = useState('');
  const [messages, setMessages] = useState([]);

  const updateDraft = (e) => {
    e.preventDefault();
    setDraft(e.target.value);
  }

  const sendMessage = () => {
    setMessages([...messages, draft]);
    setDraft = '';
  }
 
  return (
    <div>
      <Header />
      <Messages forum={forum}/>
      <form>
        <input type='text' placeholder='Chat message' name='draft' value={draft} onChange={(e) => updateDraft(e)}/>
        <button onClick={() => sendMessage()}> Submit </button>
      </form>
      <Nav />
    </div>
  );
}

export default Chat