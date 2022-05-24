import React from 'react';
import ChatCard from '../ChatCard/ChatCard';
import loadingSpinner from '../../assets/loadingSpinner.gif';
import './ChatList.css'

const ChatList = ({loggedInUser}) => {
    let chatCards;
    if (loggedInUser.id) {
      chatCards = loggedInUser.conversations.map((conversation, index) => {
          if (loggedInUser.id === conversation.user_a.id) {
             return <ChatCard key={index} id={conversation.user_a.id} conversation={conversation}/>
          } else if (loggedInUser.id === conversation.user_b.id) {
             return <ChatCard key={index} id={conversation.user_b.id} conversation={conversation}/>
          }
      })
    } else {
      chatCards = (
        <img className="loading-spinner" src={loadingSpinner}/>
      )
    }

    return (
        <div className="chat-list">
            {chatCards}
        </div>
    )
}

export default ChatList;
