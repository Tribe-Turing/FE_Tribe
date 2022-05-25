import React from 'react';
import animals from '../../animals';
import './ChatCard.css'
import {useHistory} from 'react-router-dom';

const ChatCard = ({conversation, id}) => {
    
    const history = useHistory();
    const openMessage = () => {
        return history.push(`/conversations/${conversation.convo.id}`)
    }
    
    if(!conversation.messages.length) {
      return;
    }
    const msg = conversation.messages[conversation.messages.length-1];
    if (id === conversation.user_a.id) {
        return (
            <div className='chat-card'>
                <img className="chat-image" src={animals[conversation.user_b.picture]}/>
                <div className="message-container" onClick={() => openMessage()}>
                    <p className="chat-name"> {`${conversation.user_b.first_name} ${conversation.user_b.last_name}`} </p>
                    <p className="last-message"> {msg.content} </p>
                </div>
            </div>
        )
    } else if (id === conversation.user_b.id) {
        return (
            <div className='chat-card'>
                <img className="chat-image" src={animals[conversation.user_a.picture]}/>
                <div className="message-container">
                    <p className="chat-name"> {`${conversation.user_a.first_name} ${conversation.user_a.last_name}`} </p>
                    <p className="last-message"> {msg.content} </p>
                </div>
            </div>
        )
    }
}

export default ChatCard;
