import React from 'react';
import Message from '../Message/Message';

const Messages = ({forum}) => { 
    const messages = forum.messages.map(message => {
        return(
            <Message
                image={forum.image}
                id={forum.id}
                key={forum.id}
                message={forum.message}
            />)
    })

    return (
        <div>
            {messages}
        </div>
    )
}

export default Messages;