import React, { useState, useRef, useEffect } from 'react';
import { useParams, NavLink } from "react-router-dom";
import { createConsumer } from "@rails/actioncable";

const Chat = ({ users, loggedInUser, loggedInUserProfPic, messages, setMessages, messageUser }) => {

  const [newMessage, setNewMessage] = useState("");
  const [otherUser, setOtherUser] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [otherUserProfPic, setOtherUserProfPic] = useState("");
  const params = useParams();

  useEffect(() => {
    fetchConversation();
  }, [params.id, loggedInUser.id])

  const fetchConversation = async () => {
    let data;
    if (messageUser) {
      data = {
        user_a_id: loggedInUser.id,
        user_b_id: messageUser,
        id: params.id
      }
    } else {
      const response = await fetch(`https://be-tribe.herokuapp.com/api/v1/conversations/${params.id}`)
      data = await response.json();
    }

    let otherUser;
    let conversation;
    if(!localStorage.getItem('loggedInUserID')) return;
    if(!messageUser) {
      if (data.user_a_id === loggedInUser.id) {
        conversation = loggedInUser.conversations.find(conversation => conversation.convo.id == params.id)
        otherUser = conversation.user_a;
      } else {
        conversation = loggedInUser.conversations.find(conversation => conversation.convo.id == params.id)
        console.log(loggedInUser.conversations)
        otherUser = conversation.user_b;
      }
    } else {
      let user = users.find(u => u.id === messageUser)
      otherUser = {
        id: messageUser,
        picture: user.image
      }
    }
    if(!conversation) {
      conversation = {messages: []};
    }

    setOtherUser(otherUser.id)
    setOtherUserProfPic(otherUser.picture)
    setMessages(conversation.messages);
    setIsLoaded(true);
  }

  const cable = useRef()

  useEffect(() => {
    if (!cable.current) {
      cable.current = createConsumer("wss://be-tribe.herokuapp.com/cable")
    }
    const paramsToSend = {
      channel: "ConversationChannel",
      id: params.id
    }

    const handlers = {
      received(data) {
        setMessages([...messages, data.message]);
      },

      connected() {
        console.log("connected");
      },

      disconnected() {
        console.log("disconnected");
      }
    }
    const subscription = cable.current.subscriptions.create(paramsToSend, handlers)
  }, [params.id, messages, loggedInUser.id])


  if (isLoaded) {
    const messagesOrdered = [...messages]

    const messageBubbles = messagesOrdered.map((message) => {
      if (message.user_id === loggedInUser.id) {
        return (
          <div className="sent-message" key={message.id}>
            <p className="sent-message-temp">{message.content}</p>
            <NavLink to={`/profile/${loggedInUser.id}`}><img className="profile-badge convo" src={loggedInUserProfPic} alt={loggedInUser.username} /></NavLink>
          </div>
        )
      } else {
        return (
          <div className="receieved-message" key={message.id}>
            <NavLink to={`/profile/${message.user_id}`}><img className="profile-badge convo" src={otherUserProfPic} alt={message.user_username} /></NavLink>
            <p className="receieved-message-temp">{message.content}</p>
          </div>
        )
      }
    })

    function handleSubmit(e) {
      e.preventDefault()

      if (newMessage !== "") {
        const data = {
          content: newMessage,
          conversation_id: params.id,
          user_id: loggedInUser.id
        }

        setNewMessage("")

        fetch("https://be-tribe.herokuapp.com/api/v1/messages", {
          method: "POST",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify(data)
        })
      }
    }

    return (
      <section>
        <div className="page-content conversation-page">
          <h1 className="profile-h1 username" id="chat">{otherUser}</h1>
          <div className="line info-panel"></div>
          <div className="messages-container">
            {messageBubbles}
          </div>
          <div className="message-form">
            <form onSubmit={handleSubmit}>
              <input type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} className="message-input"/>
              <button type="submit" className="message-button">Send</button>
            </form>
          </div>
        </div>
      </section>
    )
  } else {
    return (
      <div className="page-container">
        <div className="page-content loading"></div>
      </div>
    )
  }
}

export default Chat;
