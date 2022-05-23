import React from 'react';
import ChatCard from '../ChatCard/ChatCard';
// import OnlineProfiles from '../OnlineProfiles/OnlineProfiles';

const ChatList = ({loggedInUser}) => {
    console.log(loggedInUser)
    const chatCards = loggedInUser.conversations.map((conversation, index) => {
        if (loggedInUser.id === conversation.user_a.id) {
           return <ChatCard key={index} id={conversation.user_a.id} conversation={conversation}/>
        } else if (loggedInUser.id === conversation.user_b.id) {
           return <ChatCard key={index} id={conversation.user_b.id} conversation={conversation}/>
        }
    })

    return (
        <div>
            {chatCards}
        </div>
    )
}

export default ChatList;
