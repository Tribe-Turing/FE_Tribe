import React, { useState, useEffect } from 'react';
import apiCalls from '../../apiCalls';
import loadingSpinner from '../../assets/loadingSpinner.gif';

const UserProfile = ({id}) => {
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
            <button>Message {details.first_name}</button>
        </div>
    )
}

export default UserProfile;
