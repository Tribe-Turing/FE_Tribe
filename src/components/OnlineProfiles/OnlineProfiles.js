import React from 'react';
import UserProfile from '../UserProfile/UserProfile';

const OnlineProfiles = ({users}) => { 
    // Will need filter for online profiles, but otherwise will work the same
    const userProfiles = users.map(user => {
        return(
            <UserProfile
                image={user.image}
                id={user.id}
                key={user.id}
                username={user.username}
            />)
    })

    return (
        <div>
            {userProfiles}
        </div>
    )
}

export default OnlineProfiles;