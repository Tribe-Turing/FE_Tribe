import React from 'react';
import UserCard from '../ChatCard/ChatCard';

const OnlineProfiles = ({users}) => { 
    // Will need filter for online profiles, but otherwise will work the same
    const userCards = users.map(user => {
        return(
            <UserCard
                image={user.image}
                id={user.id}
                key={user.id}
                username={user.username}
            />)
    })

    return (
        <div>
            {userCards}
        </div>
    )
}

export default OnlineProfiles;