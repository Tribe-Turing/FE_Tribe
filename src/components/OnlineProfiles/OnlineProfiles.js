import React from 'react';
import UserProfile from '../UserProfile/UserProfile';

// This component is a possible extension which would show the profiles who are currently logged in above your chat conversations.

const OnlineProfiles = ({users}) => {
    // Will need filter for online profiles, but otherwise will work the same

    return (
        <div>
            it profiles
        </div>
    )
}

export default OnlineProfiles;


// const userProfiles = users.map(user => {
  //     return(
    //         <UserProfile
    //             image={user.image}
    //             id={user.id}
    //             key={user.id}
    //             username={user.username}
    //         />)
    // })
