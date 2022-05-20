import React from 'react';

const ChatCard = ({image, username, id}) => {
    // Needs most recent message
    //Add button or onclick prop to div to be able to access individual chats
    
    return (
        <div className='chat-card' key={id}>
            <img src={image}/>
            <p>{username}</p>
            <p> Most Recent Message </p>
        </div>
    )
}

export default ChatCard;
