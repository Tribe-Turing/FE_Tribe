import React from 'react';

const ChatCard = ({image, username, id}) => {
    // Needs most recent message
    return (
        <div className='chat-card' key={id}>
            <img src={image}/>
            <p>{username}</p>
            <p> Most Recent Message </p>
        </div>
    )
}

export default ChatCard;