import React, { useState } from 'react';

const UserProfile = () => {
    const [details, setDetails] = useState({
        "id": 1,
        "first_name": "Susan",
        "last name": "Smith",
        "pronouns": "she/her",
        "image": "otter",
        "city": "Denver, CO",
        "interests": ["animals", "nature"],
        "bio": "I am lonely and have too many cats."
    });

    return (
        <div>
            <h2>{details.first_name}</h2>
            <p>{details.pronouns}</p>
            <p>{details.bio}</p>
            <ul>
            {details.interests.map((interest, index) => <li key={index}>{interest}</li>)}
            </ul>
            <button className='message-user'>Message {details.first_name}</button>
        </div>
    )
}

export default UserProfile;
