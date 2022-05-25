import React, { useState, useEffect } from 'react';
import apiCalls from '../../apiCalls';
import loadingSpinner from '../../assets/loadingSpinner.gif';
import {Redirect, useHistory} from 'react-router-dom';
import animals from '../../animals';
import './UserProfile.css';

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
        <div className='profile-view'>
            <img className="photo" src={animals[details.image]}/>
            <div className="profile-details">
              <h2 className='name'>{details.first_name}</h2>
              <p className='user-pronouns'>{details.pronouns}</p>
              <p className='city'>{details.city}</p>
              <p className='bio-title'>Bio:</p>
              <p className='bio'>{details.bio}</p>
              <p className='interests-title'>Interests:</p>
              <ul className='user-interests'>
              {details.interests.map((interest, index) => <li key={index}>{interest}</li>)}
              </ul>
              {loggedInUser.id === id ? '' :
                <button className='message-user' onClick={() => messageUser()}>Message {details.first_name}</button>
              }
            </div>
        </div>
    )
}

export default UserProfile;
