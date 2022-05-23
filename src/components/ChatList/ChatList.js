import React from 'react';
import ChatCard from '../ChatCard/ChatCard';

const ChatList = ({loggedInUser}) => {
    console.log(loggedInUser, '<<<liu')
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
      chatCards = <div>Loading</div>
    }

    return (
        <div>
            {chatCards}
        </div>
    )
}

export default ChatList;
