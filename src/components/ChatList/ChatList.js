import React from 'react';
import ChatCard from '../ChatCard/ChatCard';
import OnlineProfiles from '../OnlineProfiles/OnlineProfiles';

const ChatList = ({users}) => { 
    const chatCards = users.map(user => {
        return(
            <ChatCard 
                image={user.image}
                id={user.id}
                key={user.id}
                username={user.username}
            />)
    })

    return (
        <div>
            <OnlineProfiles />
            {chatCards}
        </div>
    )
}

export default ChatList;