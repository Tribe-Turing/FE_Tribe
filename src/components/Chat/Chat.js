import { useState, useRef, useEffect } from 'react';
import { useParams } from "react-router";
import { createConsumer } from "@rails/actioncable";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [otherUser, setOtherUser] = useSate("");
  const [isLoaded, setIsLoaded] = useState(false);
  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/api/v1/convesations/${params.id}`, {
      method: "GET",
      // headers: {
      //  "Authorization": localStorage.token
      // }
    })
    .then(res => res.json())
    .then((data) => {
      if (data.user_a_id === loggedInUser.id) {
        setOtherUser(data.user_b.username);
      } else {
        setOtherUser(data.user_a.username);
      }

      setMessages(data.messages);
      setIsLoaded(true);
    })
  }, [params.id, loggedInUser.id])

  const cable = useRef()

  useEffect(() => {
    if (!cable.current) {
      cable.current = createConsumer("ws://localhost:4000/cable")
    }
    const paramsToSend = {
      channel: "ConversationChannel",
      id: params.id
    }
    const handlers = {
      received(data) {
        setMessages([...messages, data]);
        fetch(`http://localhost:4000/api/v1/messages/${data.message.id}`, {
          method: "PATCH",
          headers: {"content-type": "application/json"},
        })
      },

      connected() {
        console.log("connected");
      },

      disconnected() {
        console.log("disconnected");
        cable.current = null;
      }
    }
    const subscription = cable.subscription.create(paramsToSend, handlers)

    return function cleanup() {
      console.log("unsubbing from ", params.id);
      cable.current = null;
      subscription.unsubscribe();
    }
  }, [params.id, messages, logginInUser.id])

  if (isLoaded) {
    //add return value for message data
    console.log(messages)
    const messagesOrdered = [...messages].reverse()

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
            <NavLink to={`/profile/${message.user_id}`}><img className="profile-badge convo" src={message.user_prof_pic} alt={message.user_username} /></NavLink>
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
          user_id: loggedInUser.id,
          read: false
        }

        setNewMessage("")

        fetch("http://localhost:4000/api/v1/messages", {
          method: "POST",
          headers: {
            "content-type": "application/json",
            "Authorization": loggedInUser.token
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
