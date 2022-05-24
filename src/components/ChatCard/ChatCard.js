import React from 'react';
import animals from '../../animals';
import './ChatCard.css'

const ChatCard = ({conversation, id}) => {
    if(!conversation.messages.length) {
      return;
    }
    const msg = conversation.messages[conversation.messages.length-1];
    if (id === conversation.user_a.id) {
        return (
            <div className='chat-card'>
                <div className="portrait">
                    <img className="chat-image" src={animals[conversation.user_b.picture]}/>
                    <p className="chat-name"> {`${conversation.user_b.first_name} ${conversation.user_b.last_name}`} </p>
                </div>
                <div className="message-container">
                    <p className="last-message"> {msg.content} </p>
                </div>
            </div>
        )
    } else if (id === conversation.user_b.id) {
        return (
            <div className='chat-card'>
                <div className="portrait">
                    <img className="chat-image" src={animals[conversation.user_a.picture]}/>
                    <p> {`${conversation.user_a.first_name} ${conversation.user_a.last_name}`} </p>
                </div>
                <div className="message-container">
                    <p className="last-message"> {msg.content} </p>
                </div>
            </div>
        )
    }
}

export default ChatCard;
