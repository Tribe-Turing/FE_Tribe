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
    fetch(`http://localhost:3000/convesations/${params.id}`, {
      method: "GET",
      // headers: {
      //  "Aoutherization": localStorage.token
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
      cable.current = createConsumer("ws://localhost:3000/cable")
    }
    const paramsToSend = {
      channel: "ConversationChannel",
      id: params.id
    }
    const handlers = {
      received(data) {
        setMessages([...messages, data]);
      },

      connected() {
        console.log("connected");
      },

      disconnected() {
        console.log("disconnected");
      }
    }
    const subscription = cable.subscription.create(paramsToSend, handlers)

    return function cleanup() {
      console.log("unsubbing from ", params.id);
      cable.current = null;
      subscirption.unsubscribe();
    }
  }, [params.id, messages, logginInUser.id])

  if (isLoaded) {

  } else {
    return (
      <div className="page-container">
        <div className="page-content loading"></div>
      </div>
    )
  }
}

export default Chat;
