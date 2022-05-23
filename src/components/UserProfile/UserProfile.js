import React, { useState, useEffect } from 'react';
import apiCalls from '../../apiCalls';
import loadingSpinner from '../../assets/loadingSpinner.gif';
import {Redirect, useHistory} from 'react-router-dom';

const UserProfile = ({id, loggedInUser, setMessageUser}) => {
    const history = useHistory();
    const [isLoading, setLoading] = useState(true);
    const [details, setDetails] = useState({});

    const getOneUser = async () => {
        const response = await apiCalls.fetchOneUser(id);
        const data = await response;
        setDetails(data);
        setLoading(false);
    }

    useEffect(() => {
        getOneUser();
    }, []);

    const messageUser = async () => {
      const foundConvo = loggedInUser.conversations.find(conversation => conversation.convo.user_a_id == details.id || conversation.convo.user_b_id == details.id);
      if (foundConvo) {
        setMessageUser('')
        return history.push(`/conversations/${foundConvo.convo.id}`)
      }
      else {
        const res = await apiCalls.fetchConversations();
        const nextID = await res.length + 1;


        const data = await {
          "user_a_id": loggedInUser.id,
          "user_b_id": details.id,
          "id": nextID
        }

        const response = await apiCalls.createConversation(data)

        history.push(`/conversations/${nextID}`)
      }
    }


    return (
        isLoading ? <img className="loading-spinner" src={loadingSpinner}/> :
        <div>
            <img className="photo" src={details.image}/>
            <h2>{details.first_name}</h2>
            <p>{details.pronouns}</p>
            <p>{details.bio}</p>
            <ul>
            {details.interests.map((interest, index) => <li key={index}>{interest}</li>)}
            </ul>
            <button onClick={() => messageUser()}>Message {details.first_name}</button>
        </div>
    )
}

export default UserProfile;
