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
        <div key={details.id}>
            <h2>{details.first_name}</h2>
            <p>{details.pronouns}</p>
            <p>{details.bio}</p>
            <ul>
            {details.interests.map(interest => <li>{interest}</li>)}
            </ul>
            <button>Message {details.first_name}</button>
        </div>
    )
}

export default UserProfile;